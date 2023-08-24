import React from "react";

const PostUploadingAnimation = () => {
  return (
    <div className="flex h-fit bg-background_light_blue px-5 py-4 rounded-lg my-2">
      {/* image div */}
      <div className="h-[55px] w-[55px] flex bg-slate-700 animate-pulse rounded-full"></div>

      <div className=" flex flex-col justify-between w-full gap-y-2 ml-4">
        {/* name and update date */}
        <div className="leading-6 h-[55px] flex flex-col gap-y-2 pt-2">
          <h1 className="font-bold w-[200px] text-white  h-[15px] animate-pulse rounded-lg bg-slate-700"></h1>
          <p className="text-font_light_gray text-[12px] font-thin  h-[15px] animate-pulse rounded-lg bg-slate-700"></p>
        </div>

        {/* post image or video*/}
        <div className="h-[300px]  flex animate-pulse rounded-lg bg-slate-700"></div>
      </div>
    </div>
  );
};

export default PostUploadingAnimation;
