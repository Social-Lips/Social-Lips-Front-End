import React, { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import * as Dialog from "@radix-ui/react-dialog";

import { useLikeDislike } from "../hooks/useLikeDislike";
import dummyProfileImage from "../assets/dummy-profile.jpeg";

import "react-activity/dist/Spinner.css";
import { Spinner } from "react-activity";

import { useAuthContext } from "../hooks/useAuthContext";
import { CommentModal } from "./CommentModal";

import LikeListModal from "./LikeListModal";

import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";
import MoreOptionDropDown from "./MoreOptionDropDown";
import { useDeletePost } from "../hooks/useDeletePost";

const PostCard = ({ post, postOwner, adminUser }) => {
  const { user: adminUserId } = useAuthContext();
  const { deletePost } = useDeletePost();
  const { likeDislike, likeValue, isLoading } = useLikeDislike();

  const [likes, setLikes] = useState(post?.likes?.length);
  const [commentsCount, setCommentsCount] = useState(post?.comments?.length);
  const sub = post?.subtitle_url;
  const [likesArray, setLikesArray] = useState(post?.likes);
  const videoUrl = post?.img_url;

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
    await likeDislike(post?.post_id, adminUser._id);
  };

  const _deletePost = async () => {
    await deletePost(adminUser?._id, post?.post_id);
  };

  return (
    <div className="flex flex-col relative h-fit bg-background_light_blue py-4 rounded-lg mb-2">
      {/* option Dot 3 button */}
      <MoreOptionDropDown
        adminId={adminUser?._id}
        userId={post?.user_id}
        _deletePost={_deletePost}
        // postId={post?.postId}
      />

      <div className="flex items-center ">
        {/* image div */}
        <div className="h-[40px] w-[40px] flex justify-center items-center overflow-hidden rounded-full mx-4">
          <img
            src={post?.profilePicture || dummyProfileImage}
            height={40}
            width={40}
            className="object-cover rounded-full"
          />
        </div>

        {/* name and update date */}
        <div className="leading-none">
          <h1 className="font-bold text-[16px] text-white mb-1">
            {post?.first_name} <span>{post?.last_name}</span>
          </h1>
          <p className="text-font_light_gray text-[12px] font-thin">
            {formatDistanceToNow(new Date(post?.createdAt), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>

      {/*description  */}
      <div className="flex ml-4 my-3">
        <p className="text-[16px] text-white leading-5 font-light">
          {post?.description}
        </p>
      </div>

      <div className="flex flex-col justify-between">
        {/* post image or video*/}
        <div className="flex justify-center items-center max-h-[400px] max-w-[600px] overflow-hidden">
          {post?.postType === "image" ? (
            <>
              <img
                src={post?.img_url}
                height={400}
                width={600}
                className="object-fill blur-2xl scale-150"
              />
              <img
                src={post?.img_url}
                // height={400}
                // width={600}
                className="object-contain absolute max-h-[400px] shadow-md"
              />
            </>
          ) : (
            <>
              <MediaPlayer
                title="Sprite Fight"
                src={{ src: videoUrl, type: "video/mp4" }}
                poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
                // thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
                aspectRatio={16 / 9}
                crossorigin="anonymus"
                load="visible"
              >
                <MediaOutlet>
                  <MediaPoster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
                  <track
                    src={sub}
                    label="English"
                    srcLang="en-US"
                    kind="subtitles"
                    default
                  />
                </MediaOutlet>
                <MediaCommunitySkin />
              </MediaPlayer>
            </>
          )}
        </div>

        {/* likes and comment view area */}
        <div className="flex justify-between items-center mx-4 my-2">
          {/* like count */}
          <Dialog.Root>
            <Dialog.Trigger>
              <button
                className="flex items-center gap-x-1"
                disabled={!likesArray?.at(0)?.length > 0}
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
              <LikeListModal likesArray={likesArray} adminUser={adminUser} />
            </Dialog.Content>
          </Dialog.Root>

          {/* comment view */}
          <div>
            <span className="text-[14px] font-light text-font_light_gray">
              {commentsCount} comments
            </span>
          </div>
        </div>

        <div className="h-[1px] bg-input_box_gray mx-4" />

        {/* like and comment button */}
        <div className="flex justify-between w-full">
          {/* like */}
          <button
            disabled={isLoading}
            onClick={handleLike}
            className="flex justify-center gap-x-2 items-center h-[45px] w-[50%] text-[16px] text-white rounded-lg"
          >
            {isLoading ? (
              <Spinner size={13} />
            ) : (
              <>
                <img
                  src={
                    !likesArray?.includes(adminUserId._id)
                      ? "../src/assets/outlineLike.svg"
                      : "../src/assets/like.svg"
                  }
                  height={22}
                  width={22}
                  className="object-contain"
                />
                Like
              </>
            )}
          </button>

          <div className="w-[1px] bg-input_box_gray my-1" />

          {/* comment */}
          <Dialog.Root>
            <Dialog.Trigger className="w-[50%]">
              <button className="flex justify-center gap-x-2 items-center h-[45px] w-full text-[16px]  text-white rounded-lg">
                <img
                  src="../src/assets/comment.svg"
                  height={17}
                  width={17}
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
                postId={post.post_id}
                userId={adminUserId._id}
                adminUser={adminUser}
                setCommentsCount={setCommentsCount}
              />
            </Dialog.Content>
          </Dialog.Root>
        </div>
        <div className="h-[1px] bg-input_box_gray mx-4" />
      </div>
    </div>
  );
};

export default PostCard;
