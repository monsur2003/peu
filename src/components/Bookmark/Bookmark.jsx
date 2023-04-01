import React from "react";

const Bookmark = ({ blog }) => {
  const { title } = blog;
  console.log(blog);
  return (
    <div>
      <div className="container border border-gray-200 bg-white  p-3 mb-3 ">
        <div>
          <h2 className="text-[18px] font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
