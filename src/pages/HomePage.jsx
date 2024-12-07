import Sidebar from "../layout/Sidebar";
import Footer from "../layout/footer";
import ArticleCard from "../components/ArticleCard";
import ArtistsSidebar from "../components/ArtistsSidebar";

const HomePage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <div className="min-w-60 px-8 py-5 bg-white rounded-xl">
            <p className="text-3xl font-semibold">YuConnect</p>
          </div>
          <div className="bg-white px-8 flex justify-between items-center w-full rounded-xl">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block md:w-52 lg:w-60 w-full ps-8 p-2 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-[#86d8ce] focus:border-[#86d8ce] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#86d8ce] dark:focus:border-[#86d8ce]"
                placeholder="Search here..."
              />
            </div>
            <div className="flex gap-2">
              <img src="src/assets/icons/filter.svg" alt="Filter" />
              <p className="text-base">Filter</p>
            </div>
          </div>
          <button className="bg-[#88C2BB] min-w-60 px-8 py-5 text-center rounded-xl">
            <p className="text-white font-semibold">Become a Seller</p>
          </button>
        </div>
        <div className="flex gap-8">
          <Sidebar active={"home"} />
          <ArticleCard />
          <ArtistsSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
