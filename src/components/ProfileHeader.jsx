import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const ProfileHeader = ({ user }) => {
  return (
    <div className="w-full">
      {/* cover image */}
      <div className="w-[1100px] h-[350px] flex relative ">
        <img
          src="../src/assets/cover2.jpg"
          height={350}
          width={1100}
          className="object-cover rounded-xl"
        />
        <div className="w-full h-full bg-gradient-to-t from-background_light_blue absolute rounded-xl" />
      </div>

      {/* about and buttons */}
      <div className="flex justify-between items-center mt-4">
        {/* description */}
        <div className="text-white ml-[240px]">
          <h1 className="text-[32px] font-bold">K.L.L Silva</h1>
          <span className="text-[20px] font-extralight">
            Source Sans Pro is one of the best fonts for web design
          </span>
          <div className="flex justify-right items-center gap-x-5">
            <span className="text-[12px] font-extralight">2320 Followers</span>
            <div className="w-[1px] h-[20px] bg-input_box_gray" />
            <span className="text-[12px] font-extralight">2320 Followers</span>
          </div>
        </div>

        {/* buttons */}
        <div className="flex gap-x-3">
          <button className="w-[110px] h-[40px] border-[0.2px] rounded-lg border-input_box_gray font-bold text-[14px] text-white hover:bg-white hover:text-black">
            Edit Profile
          </button>
          <button className="w-[110px] h-[40px] border-[0.2px] rounded-lg border-input_box_gray font-bold text-[14px] bg-white  hover:bg-transparent hover:text-white">
            Follow
          </button>
        </div>
      </div>

      {/* profile image */}
      <div className="h-[200px] w-[200px] flex absolute top-2/3 transform -translate-y-[75%] border-[4px] border-background_dark_blue rounded-full">
        <img
          className="object-cover rounded-full"
          src={user.url}
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
