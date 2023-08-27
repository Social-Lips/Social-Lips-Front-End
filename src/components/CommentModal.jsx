import React, { useEffect, useId, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAddComment } from "../hooks/useAddComment";
import { useGetComments } from "../hooks/useGetComments";

import "react-activity/dist/Dots.css";
import { Dots } from "react-activity";

export const CommentModal = ({ postId, userId, adminUser }) => {
  const { addComment, comment, loading: addingComment } = useAddComment();
  const {
    getComments,
    comments,
    isLoading: gettingComments,
    error,
  } = useGetComments();

  const [commentText, setCommentText] = useState();

  const _addComment = async () => {
    await addComment(
      postId,
      userId,
      commentText,
      adminUser.first_name + " " + adminUser.last_name,
      adminUser.profilePicture
    );
    setCommentText("");
  };

  const _getComments = async () => {
    await getComments(postId);
  };

  useEffect(() => {
    _getComments();
  }, [addingComment]);

  return (
    <section className="w-full">
      <div className="w-full flex justify-end mb-4 px-5">
        <Dialog.Close className="">
          <img
            src="../src/assets/close.svg"
            height={24}
            width={24}
            className="rounded-full border-font_light_gray"
          />
        </Dialog.Close>
      </div>

      <div className="h-[60vh] overflow-y-scroll px-8 mb-1">
        {/* comments body */}
        {comments?.map((comment, index) => (
          <div
            key={index}
            className="h-auto w-full bg-white px-8 py-3 flex rounded-md mb-1"
          >
            {/* image div */}
            <div className="h-[30px] w-[30px] block relative">
              <img
                src={comment.commentBy.profilePicture}
                className="object-fill h-[30px] w-[30px] rounded-full "
              />
            </div>

            <div className="flex flex-col gap-y-2 w-full ml-4">
              {/* name and update date */}
              <div className="leading-tight">
                <h1 className="font-bold text-[12px]">
                  <span>{comment.commentBy.first_name}</span>{" "}
                  <span>{comment.commentBy.last_name}</span>
                </h1>
                <p className="text-font_light_gray text-[10px] font-thin">
                  {formatDistanceToNow(new Date(comment?.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>

              {/*description  */}
              <div className="flex">
                <p className="text-[12px] leading-4">{comment?.text}</p>
              </div>
            </div>
          </div>
        ))}
        {gettingComments && <Dots size={10} className="text-center" />}
        {error}
      </div>

      {/* text input */}
      <div className="h-[95px] w-full px-8">
        <div className="h-auto bg-white px-8 py-3 flex rounded-md justify-between items-start gap-x-1">
          {/* image div */}
          <div className="h-[30px] w-[50px] flex">
            <img
              src={adminUser.profilePicture}
              height={30}
              width={30}
              className="object-cover rounded-full "
            />
          </div>

          <div className="flex flex-col gap-y-2 w-full ml-4">
            <textarea
              rows={4}
              type="text"
              onChange={(e) => setCommentText(e.target.value)}
              value={commentText}
              className="rounded-md border-[0.1px] text-[12px] leading-none"
            />
          </div>

          <button
            onClick={_addComment}
            disabled={!commentText || gettingComments || addingComment}
            className="bg-background_dark_blue text-white text-[12px] font-bold px-5 py-1 rounded-md"
          >
            SEND
          </button>
        </div>
      </div>
    </section>
  );
};
