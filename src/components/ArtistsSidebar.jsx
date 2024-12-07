import { useState } from "react";

const ArtistsSidebar = () => {
  const [activeTab, setActiveTab] = useState("artists");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const ArtistDetails = [
    {
      id: 0,
      tag: "@thewildwithyou",
      userImage: "src/assets/images/user2.png",
      image: "src/assets/images/user1-bg.png",
      author: "Thomas Edward",
    },
    {
      id: 1,
      tag: "@thewildwithyou",
      userImage: "src/assets/images/user3.png",
      image: "src/assets/images/user3-bg.png",
      author: "Chris Doe",
    },
    {
      id: 2,
      tag: "@thewildwithyou",
      userImage: "src/assets/images/user5.png",
      image: "src/assets/images/bg1.png",
      author: "Emilie Jones",
    },
    {
      id: 3,
      tag: "@thewildwithyou",
      userImage: "src/assets/images/user4.png",
      image: "src/assets/images/user6-bg.png",
      author: "Jessica Williams",
    },
    {
      id: 4,
      tag: "@thewildwithyou",
      userImage: "src/assets/images/user2.png",
      image: "src/assets/images/user2-bg.png",
      author: "Oscar Hernandez",
    },
  ];

  return (
    <div className="min-w-60 max-w-60 h-[80vh]">
      <div className="flex gap-6 mb-5">
        <p
          onClick={() => handleTabClick("artists")}
          className={`cursor-pointer font-semibold ${
            activeTab === "artists" ? "text-black" : "text-[#8D8D8D]"
          }`}
        >
          Artists
        </p>
        <p
          onClick={() => handleTabClick("photographers")}
          className={`cursor-pointer font-semibold ${
            activeTab === "photographers" ? "text-black" : "text-[#8D8D8D]"
          }`}
        >
          Photographers
        </p>
      </div>
      {activeTab === "artists" && (
        <div className="flex flex-col gap-7 h-[73vh] overflow-auto">
          {ArtistDetails.map((artist) => (
            <div key={artist.id} className="relative">
              <img src={artist.image} alt={artist.author} className="rounded-xl" />
              <div className="absolute py-3 px-3 bottom-0 left-0 flex items-center gap-2 bg-gradient-to-b from-transparent to-[#000000df] w-full rounded-xl">
                <div className="rounded-xl">
                  <img
                    src={artist.userImage}
                    alt={artist.author}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="text-white">
                  <p className="font-semibold">{artist.author}</p>
                  <p className="text-xs font-medium">{artist.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistsSidebar;
