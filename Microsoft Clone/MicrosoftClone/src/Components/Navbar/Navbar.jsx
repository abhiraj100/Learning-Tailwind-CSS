import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto w-full">
      {/* Navbar  */}
      <div className="navbar flex justify-between items-center p-4">
        <div className="flex justify-center items-center md:order-2">
          <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>

          <div className="search md:hidden w-6 mr-6">
            <img className="" src="/search.svg" />
          </div>
        </div>

        <div className="logo flex text-center md:order-1">
          <div className="flex items-center justify-start">
            <img
              className="w-[50%] flex justify-center"
              src="/public/mslogo.png"
              alt="Microsoft"
            />
          </div>

          <div className="features absolute w-fit md:static md:w-auto bg-gray-200 md:bg-white inset-0 md:flex md:items-center md:mx-4 md:space-x-6 -translate-x-96 md:translate-x-0">
            <div className="hover:underline hover:underline-offset-8 cursor-pointer">Microsoft 365</div>
            <div className="hover:underline hover:underline-offset-8 cursor-pointer">Office</div>
            <div className="hover:underline hover:underline-offset-8 cursor-pointer">Windows</div>
            <div className="hover:underline hover:underline-offset-8 cursor-pointer">Surface</div>
            <div className="hover:underline hover:underline-offset-8 cursor-pointer">Xbox</div>
            <div className="hover:underline hover:underline-offset-8 cursor-pointer">Support</div>
          </div>
        </div>
        <div className="cart text-center md:order-3 flex">
          <div className="search hidden md:block mr-6 hover:underline hover:underline-offset-8 cursor-pointer"> All Microsoft</div>
          <div className=" mx-2 hover:underline hover:underline-offset-8 cursor-pointer">Search</div> 
          <img className="w-4 mr-6" src="/search.svg" />
          <div className="flex pt-1 flex-row">
            <img className="w-4 h-4 mr-4" src="/cart icon.svg" />
            <img className="w-4 h-4  mr-4" src="/account icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
