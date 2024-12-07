import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import PropTypes from "prop-types";

const ArticleCard = () => {
  const shortDesc = (description) => {
    const firstPeriodIndex = description.indexOf(".");
    return firstPeriodIndex !== -1
      ? description.substring(0, firstPeriodIndex + 1)
      : description;
  };

  const AuthorDetails = [
    {
      id: 0,
      tag: "@thewallart",
      userImage: "src/assets/images/user1.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. So we hide more of the important content in the read more which the reader will not be interested to check and hence miss out of the important information.",
      image: "src/assets/images/user4-bg.png",
      author: "Lara Leones",
    },
    {
      id: 1,
      tag: "@thecustomcreater",
      userImage: "src/assets/images/user6.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. So we hide more of the important content in the read more which the reader will not be interested to check and hence miss out of the important information.",
      image: "src/assets/images/user5-bg.png",
      author: "Thomas J.",
    },
  ];

  const Paintings = [
    { id: 0, image: "src/assets/images/bg1.png" },
    { id: 1, image: "src/assets/images/bg2.png" },
    { id: 2, image: "src/assets/images/bg3.png" },
    { id: 3, image: "src/assets/images/bg4.png" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full h-[80vh] overflow-y-auto">
      {AuthorDetails.map((card) => (
        <ArticleCardComponent
          key={card.id}
          cardData={card}
          shortDesc={shortDesc}
        />
      ))}
      <div className="w-full">
        <div className="flex gap-4 overflow-auto pb-5">
          {Paintings.map((painting) => (
            <div key={painting.id} className="flex flex-col gap-2">
              <div className="w-64 h-44 rounded-xl overflow-hidden">
                <img
                  src={painting.image}
                  alt="Painting"
                  className="size-full"
                />
              </div>
              <p className="text-sm font-semibold">
                Modern Wall Decor Framed Painting
              </p>
              <div className="flex justify-between">
                <p className="text-2xl font-semibold">$199.99</p>
                <img src="src/assets/icons/star.svg" alt="star" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ArticleCardComponent = ({ cardData, shortDesc }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div key={cardData.id} className="bg-white rounded-lg">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-xl">
              <img src={cardData.userImage} alt="User" width={48} height={48} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-xl"> {cardData.author} </h2>
              <p className="text-[#8D8D8D]"> {cardData.tag} </p>
            </div>
          </div>
          <FaEllipsisVertical />
        </div>
        <p className="py-5">
          {readMore ? cardData.description : shortDesc(cardData.description)}
          {cardData.description.length >
            shortDesc(cardData.description).length && (
            <button
              onClick={() => setReadMore((prev) => !prev)}
              className="text-[#FF5E8A] font-medium pl-1"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          )}{" "}
        </p>
        <div className="relative">
          <img src={cardData.image} alt="Author Post" className="w-full" />
          <div className="absolute top-5 right-5 p-2">
            <img src="src/assets/icons/white-heart.svg" alt="Favorite" />
          </div>
        </div>
      </div>
      <hr />
      <div className="p-8 flex items-center gap-4">
        <div className="flex gap-2 items-center">
          <img src="src/assets/icons/heart.svg" alt="heart" />
          <p className="font-semibold text-xl">9.8k</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="src/assets/icons/comment.svg" alt="comment" />
          <p className="font-semibold text-xl">8.6k</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="src/assets/icons/share.svg" alt="share" />
          <p className="font-semibold text-xl">8.6k</p>
        </div>
      </div>
    </div>
  );
};

ArticleCardComponent.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    userImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  shortDesc: PropTypes.func.isRequired,
};

export default ArticleCard;