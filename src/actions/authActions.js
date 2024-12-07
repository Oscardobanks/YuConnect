import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../auth/firebase";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      toast.success("User Logged in Successfully!!");
      return userCredential.user;
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("User not found. Please check your email address.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address. Please check your input.");
      } else if (error.code === "auth/invalid-credential") {
        toast.error("Invalid email or password. Please try again.");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    toast.success("User Logged out Successfully!!");
    return;
  } catch (error) {
    toast.error("An error occurred while logging out. Please try again later.");
    return thunkAPI.rejectWithValue(error);
  }
});

const { actions: authActions } = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    user: null,
    error: null,
  },
  reducers: {
    signupStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    signupFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { signupStart, signupSuccess, signupFailure } = authActions;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    UPDATE_USER: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { UPDATE_USER } = authActions;

export default authSlice.reducer;
