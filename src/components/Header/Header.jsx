import React from "react";

const Header = () => {
  return (
    <div className="">
      <nav className="flex justify-between px-8 py-5 items-center border-b-2">
        <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4 items-center">
            <li>home</li>
            <li>About</li>
            <li>Log in</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
