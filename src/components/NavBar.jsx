import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-background_dark_blue h-[8vh] flex justify-between items-center backdrop-blur-md px-4 fixed w-full z-50">
      {/* image and searchbox */}
      <div className="flex justify-center items-center gap-x-1">
        <img src="../src/assets/logo.png" height={50} width={50} />
        <input
          type="text"
          className="h-[40px] w-[250px] rounded-full pl-5 text-[12px] font-extralight bg-input_box_gray border-none text-white"
          placeholder="#Explore"
        />
      </div>

      {/* home button, notification button, profile button */}
      <div className="flex justify-center items-center gap-x-1">
        <div className="bg-white h-[36px] w-[90px] flex justify-center items-center rounded-full gap-1 cursor-pointer">
          <img src="../src/assets/home1.svg" height={22} width={22} />
          <p className="text-[12px] font-bold">Home</p>
        </div>

        <div className="relative cursor-pointer">
          <img src="../src/assets/bell.svg" height={24} width={24} />
          <div className="absolute h-[12px] w-[12px] rounded-full bg-button_blue top-0 right-0 border-[1.5px] border-background_dark_blue" />
        </div>

        <div className="bg-input_box_gray w-[1px] h-[40px] mx-3" />

        <div className="bg-input_box_gray h-[36px] w-[126px] flex justify-around items-center rounded-full gap-1 cursor-pointer">
          <img
            src="../src/assets/profile.jpg"
            height={28}
            width={28}
            className="rounded-full ml-[2px]"
          />
          <p className="text-[12px] font-semibold text-white">K L L Silva</p>
          <img
            src="../src/assets/down.svg"
            height={15}
            width={15}
            className="mr-2"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
