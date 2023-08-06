import React, { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGetPosts } from "../hooks/useGetPosts";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ReactPlayer from "react-player";

const PostCard = ({ post, user }) => {
  return (
    <div className="flex h-fit bg-background_light_blue px-5 py-4 rounded-lg">
      {/* image div */}
      <div className="h-[55px] w-[55px]  mr-4 flex justify-center items-er ">
        <img
          src={user.url}
          height={55}
          width={55}
          className="rounded-full object-cover"
        />
      </div>

      <div className=" flex flex-col justify-between w-full gap-y-2">
        {/* name and update date */}
        <div className="leading-6">
          <h1 className="font-bold text-[24px] text-white">{post.user_id}</h1>
          <p className="text-font_light_gray text-[12px] font-thin">
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </p>
        </div>

        {/*description  */}
        <div className="flex">
          <p className="text-[16px] text-white leading-5">{post.description}</p>
        </div>

        {/* post image or video*/}
        <div className="h-[300px]  flex">
          {post.postType === "image" ? (
            <img
              src={post.img_url}
              // height={300}
              // width={522}
              className="object-cover rounded-lg"
            />
          ) : (
            <ReactPlayer
              controls={true}
              url={post.img_url}
              className="react-player"
              width="100%"
              height="100%"
            />
          )}
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
