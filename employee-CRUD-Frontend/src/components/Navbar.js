import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-500"> {/* Use iOS-like blue background */}
      <div className="h-16 px-8 flex items-center">
        <p className="text-white font-semibold text-xl">Employee CRUD</p> {/* Use iOS-like font and text size */}
      </div>
    </div>
  );
};

export default Navbar;
