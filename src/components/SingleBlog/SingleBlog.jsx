import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({ blog, handleMin, handleBookmark }) => {
  const { name, title, img, profile, date, mints } = blog;
  //   console.log(blog);
  return (
    <div className="gap-x-6 w-[840px] border-2 p-4 mb-4 shadow-lg">
      <img className="w-[780px] h-[400px] rounded-lg" src={img} alt="" />
      <div className="author mt-3 mb-3">
        <div className="author-details flex gap-3 items-center">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src={profile}
            alt=""
          />
          <div className="flex justify-between items-center w-full mx-8">
            <div>
              <h3 className="text-[24px] font-semibold">{name}</h3>
              <p>{date}</p>
            </div>
            <p>
              {mints} min read
              <span
                onClick={() => {
                  handleBookmark(blog);
                }}
                className="cursor-pointer ml-2 text-2xl"
              >
                {" "}
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </p>
          </div>
        </div>
        <h1 className=" w-[700px] text-3xl font-bold mt-5 mb-2">{title}</h1>
        <p className="mt-4 mb-6">#beginners #programming</p>

        <div className="text-blue-600 underline cursor-pointer font-semibold text-[18px]">
          <p
            onClick={() => {
              handleMin(mints);
            }}
            className=""
          >
            Mark as read
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
