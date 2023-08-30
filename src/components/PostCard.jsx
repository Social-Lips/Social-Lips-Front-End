import React, { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ReactPlayer from "react-player";
import * as Dialog from "@radix-ui/react-dialog";
import { useLikeDislike } from "../hooks/useLikeDislike";
import dummyProfileImage from "../assets/dummy-profile.jpeg";

import "react-activity/dist/Spinner.css";
import { Spinner } from "react-activity";

import { useAuthContext } from "../hooks/useAuthContext";
import { CommentModal } from "./CommentModal";

import envtt from "../assets/subs/en.vtt?url";
import LikesCommentsModal from "./LikesCommentsModal";

const PostCard = ({ post, postOwner, adminUser }) => {
  const { user: adminUserId } = useAuthContext();

  const [likes, setLikes] = useState(post?.likes?.length);
  const [commentsCount, setCommentsCount] = useState(post?.comments?.length);

  const [likesArray, setLikesArray] = useState(post?.likes);

  const { likeDislike, likeValue, isLoading } = useLikeDislike();

  const test = ["a", "deshan"];

  useEffect(() => {
    // Update the likes state when the likeValue changes
    if (likeValue !== null && likeValue === "liked") {
      setLikes((prev) => prev + 1); // Update the likes count with the new value
      setLikesArray((prev) => [...prev, adminUserId._id]);
    } else if (likeValue !== null && likeValue === "disliked") {
      setLikes((prev) => prev - 1); // Update the dislikes count with the new value
      setLikesArray((prev) => prev.filter((value) => value != adminUserId._id));
    }
  }, [likeValue]);

  const handleLike = async () => {
    await likeDislike(post?._id, adminUser._id);
  };
  console.log(test.at(0).length > 0);
  return (
    <div className="flex h-fit bg-background_light_blue px-5 py-4 rounded-lg my-2">
      {/* image div */}
      <div className="h-[55px] w-[55px] flex">
        <img
          src={postOwner?.profilePicture || dummyProfileImage}
          height={55}
          width={55}
          className="object-cover h-[55px] w-[55px] rounded-full "
        />
      </div>

      <div className=" flex flex-col justify-between w-full gap-y-2 ml-4">
        {/* name and update date */}
        <div className="leading-6">
          <h1 className="font-bold text-[24px] text-white">
            {postOwner?.first_name} <span>{postOwner?.last_name}</span>
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
              config={{
                file: {
                  attributes: {
                    crossOriginIsolated: "anonymus",
                  },
                  tracks: [
                    {
                      kind: "subtitles",
                      src: envtt,
                      srcLang: "tr",
                      default: true,
                    },
                  ],
                },
              }}
            />
          )}
        </div>

        {/* likes and comment view area */}
        <div className="flex justify-between items-center">
          {/* like count */}
          <Dialog.Root>
            <Dialog.Trigger>
              <button
                className="flex items-center gap-x-1"
                disabled={!likesArray?.at(0).length > 0}
              >
                <img
                  src="../src/assets/like.svg"
                  height={18}
                  width={18}
                  className="object-contain bg-button_blue rounded-full p-[2px]"
                />
                <span className="text-[14px] font-light text-font_light_gray">
                  {likes}
                </span>
              </button>
            </Dialog.Trigger>
            <Dialog.Overlay className="bg-black/30 h-screen w-screen fixed inset-0 z-40" />
            <Dialog.Content
              className="fixed flex justify-center items-center flex-col py-4 w-[400px] top-1/2 right-1/2 bg-[#ffff] transform translate-x-1/2 -translate-y-1/2 animate-wiggle z-50 rounded-lg drop-shadow-none"
              style={{ minWidth: "200px" }}
            >
              <LikesCommentsModal
                likesArray={likesArray}
                adminUser={adminUser}
              />
            </Dialog.Content>
          </Dialog.Root>

          {/* comment view */}
          <Dialog.Root>
            <button>
              <span className="text-[14px] font-light text-font_light_gray">
                {commentsCount} comments
              </span>
            </button>
          </Dialog.Root>
        </div>

        {/* like and comment button */}
        <div className="flex justify-between">
          {/* like */}
          <button
            disabled={isLoading}
            onClick={handleLike}
            className="flex justify-center gap-x-2 items-center h-[50px] w-[270px] text-[16px] bg-input_box_gray text-white rounded-lg"
          >
            {isLoading ? (
              <Spinner size={13} />
            ) : (
              <>
                <img
                  src={
                    !likesArray.includes(adminUserId._id)
                      ? "../src/assets/outlineLike.svg"
                      : "../src/assets/like.svg"
                  }
                  height={25}
                  width={25}
                  className="object-contain"
                />
                Like
              </>
            )}
          </button>

          {/* comment */}
          <Dialog.Root>
            <Dialog.Trigger>
              <button className="flex justify-center gap-x-2 items-center h-[50px] w-[270px] text-[16px] bg-input_box_gray text-white rounded-lg">
                <img
                  src="../src/assets/comment.svg"
                  height={20}
                  width={20}
                  className="object-contain"
                />
                Comment
              </button>
            </Dialog.Trigger>
            <Dialog.Overlay className="bg-black/30 h-screen w-screen fixed inset-0 z-40" />
            <Dialog.Content
              className="fixed flex justify-center items-center flex-col py-4 w-[490px] top-1/2 right-1/2 bg-[#CCD8E0] transform translate-x-1/2 -translate-y-1/2 animate-wiggle z-50 rounded-2xl drop-shadow-none"
              style={{ minWidth: "300px" }}
            >
              <CommentModal
                postId={post._id}
                userId={adminUserId._id}
                adminUser={adminUser}
                setCommentsCount={setCommentsCount}
              />
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
