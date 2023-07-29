import React from "react";

const PostCard = () => {
  return (
    <div className="flex h-fit bg-background_light_blue px-5 py-4 rounded-lg">
      {/* image div */}
      <div className="h-[55px] w-[55px] mr-4">
        <img
          src="../src/assets/profile.jpg"
          height={55}
          width={55}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col justify-between w-full gap-y-2">
        {/* name and update date */}
        <div className="leading-6">
          <h1 className="font-bold text-[24px] text-white">K.L.L Silva</h1>
          <p className="text-font_light_gray text-[12px] font-thin">
            Few minute ago
          </p>
        </div>

        {/*description  */}
        <div className="flex">
          <p className="text-[16px] text-white leading-5">
            Source Sans Pro is one of the best
          </p>
        </div>

        {/* post image */}
        <div className="h-[300px] w-full flex">
          <img
            src="../src/assets/postImage.jpg"
            // height={300}
            // width={522}
            className="object-cover rounded-lg"
          />
        </div>

        {/* likes and comment view area */}
        <div className="flex justify-between items-center">
          {/* like count */}
          <div className="flex items-center gap-x-1">
            <img
              src="../src/assets/like.svg"
              height={18}
              width={18}
              className="object-contain bg-button_blue rounded-full p-[2px]"
            />
            <span className="text-[14px] font-light text-font_light_gray">
              34.1k
            </span>
          </div>

          {/* comment view */}
          <div>
            <span className="text-[14px] font-light text-font_light_gray">
              100 comments
            </span>
          </div>
        </div>

        {/* like and comment button */}
        <div className="flex justify-between">
          {/* like */}
          <button className="flex justify-center gap-x-2 items-center h-[50px] w-[270px] text-[16px] bg-input_box_gray text-white rounded-lg">
            <img
              src="../src/assets/like.svg"
              height={25}
              width={25}
              className="object-contain"
            />
            Like
          </button>

          {/* comment */}
          <button className="flex justify-center gap-x-2 items-center h-[50px] w-[270px] text-[16px] bg-input_box_gray text-white rounded-lg">
            <img
              src="../src/assets/comment.svg"
              height={20}
              width={20}
              className="object-contain"
            />
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
