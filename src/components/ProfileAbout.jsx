import React from "react";

const ProfileAbout = () => {
  return (
    <div className="bg-background_light_blue rounded-lg p-8 w-[380px] gap-y-4 flex flex-col mb-2">
      {/*  */}
      <div className="flex gap-x-2 text-font_light_gray font-thin text-[14px]">
        <img src="../src/assets/cap.svg" height={20} width={20} />
        <span>Studying at Lorem Ipsum </span>
      </div>
      <div className="flex gap-x-2 text-font_light_gray font-thin text-[14px]">
        <img src="../src/assets/location.svg" height={20} width={20} />
        <span>Lives in Lorem Ipsum Lorem Ipsum text </span>
      </div>
      <div className="flex gap-x-2 text-font_light_gray font-thin text-[14px]">
        <img src="../src/assets/work.svg" height={20} width={20} />
        <span>Work at Lorem Ipsum Lorem Ipsum text </span>
      </div>
      <div className="flex gap-x-2 text-font_light_gray font-thin text-[14px]">
        <img src="../src/assets/heart.svg" height={20} width={20} />
        <span>In a Relationship</span>
      </div>
      <div className="flex gap-x-2 text-font_light_gray font-thin text-[14px]">
        <img src="../src/assets/call.svg" height={20} width={20} />
        <span>at 0771234567</span>
      </div>
    </div>
  );
};

export default ProfileAbout;
