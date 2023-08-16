import React, { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ReactPlayer from "react-player";
import { useLikeDislike } from "../hooks/useLikeDislike";

import "react-activity/dist/Spinner.css";
import { Spinner } from "react-activity";

const PostCard = ({ post, user }) => {
  const [likes, setLikes] = useState(post?.likes.length);
  const { likeDislike, likeValue, isLoading, error } = useLikeDislike();

  useEffect(() => {
    // Update the likes state when the likeValue changes
    if (likeValue !== null && likeValue === "liked") {
      setLikes((prev) => prev + 1); // Update the likes count with the new value
    } else if (likeValue !== null && likeValue === "disliked") {
      setLikes((prev) => prev - 1); // Update the dislikes count with the new value
    }
  }, [likeValue]);

  const handleLike = async () => {
    await likeDislike(post?._id, user._id);
  };

  return (
    <div className="flex h-fit bg-background_light_blue px-5 py-4 rounded-lg my-2">
      {/* image div */}
      <div className="h-[55px] w-[55px] flex">
        <img
          src={user?.profilePicture}
          height={55}
          width={55}
          className="object-cover rounded-full "
        />
      </div>

      <div className=" flex flex-col justify-between w-full gap-y-2 ml-4">
        {/* name and update date */}
        <div className="leading-6">
          <h1 className="font-bold text-[24px] text-white">
            {user?.first_name} <span>{user?.last_name}</span>
          </h1>
          <p className="text-font_light_gray text-[12px] font-thin">
            {formatDistanceToNow(new Date(post?.createdAt), {
              addSuffix: true,
            })}
          </p>
        </div>

        {/*description  */}
        <div className="flex">
          <p className="text-[16px] text-white leading-5">
            {post?.description}
          </p>
        </div>

        {/* post image or video*/}
        <div className="h-[300px]  flex">
          {post?.postType === "image" ? (
            <img
              src={post?.img_url}
              // height={300}
              // width={522}
              className="object-cover rounded-lg"
            />
          ) : (
            <ReactPlayer
              controls={true}
              url={post?.img_url}
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
              {likes}
            </span>
          </div>

          {/* comment view */}
          <div>
            <span className="text-[14px] font-light text-font_light_gray">
              {post?.comments.length} comments
            </span>
          </div>
        </div>

        {/* like and comment button */}
        <div className="flex justify-between">
          {/* like */}
          <button
            disabled={isLoading}
            onClick={handleLike}
            className="flex justify-center gap-x-2 items-center h-[50px] w-[270px] text-[16px] bg-input_box_gray text-white rounded-lg"
          >
            <img
              src="../src/assets/like.svg"
              height={25}
              width={25}
              className="object-contain"
            />
            {isLoading ? <Spinner size={13} /> : <>Like</>}
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
