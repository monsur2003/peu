import React, { useEffect, useState } from "react";
import Bookmark from "../Bookmark/Bookmark";

import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [mint, setMint] = useState(0);
  const [blogsForBookMark, setBlog] = useState([]);
  //   const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("know.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmark = (blog) => {
    const added = blogsForBookMark.find((blg) => blog === blg);
    if (added) {
      return;
    } else {
      const newBlog = [...blogsForBookMark, blog];
      setBlog(newBlog);
    }
  };
  //   console.log(blog);

  const handleMin = (min) => {
    const sumOfminutes = mint + min;
    setMint(sumOfminutes);
  };
  //   console.log(mint);
  //   console.log(blogs);
  return (
    <div className="grid grid-cols-1 gap-5 px-3 mt-7 lg:grid-cols-3 lg:gap-5">
      <div className="w-full lg:col-span-2">
        <h3 className="text-center mb-2 text-[18px] font-semibold">
          Total Blogs: {blogs.length}
        </h3>
        <div className="grid grid-cols-1 gap-5">
          {blogs.map((blog) => (
            <SingleBlog
              blog={blog}
              key={blog.id}
              handleMin={handleMin}
              handleBookmark={handleBookmark}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:col-span-1 mt-5 lg:mt-0">
        <div>
          <div className=" bg-gray-200 rounded-lg p-3 mt-[20px] mb-5">
            <h3 className="text-center text-2xl font-semibold text-blue-500">
              Spent time on read: {mint} min
            </h3>
          </div>
          <div className="bg-blue-200 p-3 rounded-lg">
            <div className="border-b-2">
              <h2 className="mb-3 text-[20px]">
                Bookmarked Blogs:{" "}
                <span className="text-[20px] font-semibold">
                  {blogsForBookMark.length}
                </span>
              </h2>
            </div>
            {blogsForBookMark.map((blog) => (
              <Bookmark blog={blog}></Bookmark>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
