import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const ProfileCard = () => {
  const { user } = useAuthContext();

  return (
    <div className="relative h-fit bg-background_light_blue rounded-lg">
      {/* cover image */}
      <div className="h-[126px] w-[380px] bg-black flex ">
        <img
          src="../src/assets/cover.jpg"
          height={126}
          width={380}
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* profile image */}
      <div className="absolute h-[100px] w-[100px] top-[126px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="h-[100px] w-[100px] flex">
          <img
            src={user?.url}
            height={100}
            width={100}
            className="object-cover rounded-full border-[4px] border-background_light_blue"
          />
        </div>
      </div>

      {/* name and description */}
      <div className="mt-[60px] flex justify-center flex-col items-center">
        <h1 className="text-white text-[24px] font-semibold">K.L.L Silva</h1>
        <p className="text-[16px] font-light text-font_light_gray">@silvakll</p>
        <p className="text-[16px] font-light text-white px-10 text-center leading-4">
          Source Sans Pro is one of the best fonts for web design
        </p>
      </div>

      {/* followers & following count */}
      <div className="relative border-t-[1px] border-b-[1px] border-input_box_gray h-[100px] flex justify-around items-center mt-5">
        <div className="flex justify-center items-center flex-col">
          <p className="font-semibold text-[24px] text-white">2022</p>
          <p className="font-light text-[16px] text-font_light_gray">
            Followers
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="font-semibold text-[24px] text-white">2022</p>
          <p className="font-light text-[16px] text-font_light_gray">
            Followings
          </p>
        </div>
        <div className="absolute h-[63px] w-[1px] bg-input_box_gray" />
      </div>

      {/* my profile button */}
      <p className="text-center my-5 font-normal text-[20px] text-button_blue cursor-pointer">
        My Profile
      </p>
    </div>
  );
};

export default ProfileCard;
