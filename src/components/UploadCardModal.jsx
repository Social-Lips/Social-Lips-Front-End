import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const UploadCardModal = ({
  user,
  uploadImageHandler,
  setDescription,
  setFile,
  postType,
  setPostType,
}) => {
  const [itemSrc, setItemSrc] = useState(null);

  function handleFile(e) {
    const _fileType = e.target.files[0].type;
    setPostType(_fileType.split("/")[0]);
    setItemSrc(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }
  function handleCloseItem() {
    setItemSrc(null);
    setPostType(null);
    setFile(null);
  }

  return (
    <div className="p-4 w-full">
      {/* ------title and close button---- */}
      <div className="flex w-full justify-center items-center">
        <Dialog.Title className="text-[20px] font-bold text-white w-[95%] text-center">
          Create Post
        </Dialog.Title>
        <Dialog.Close className="w-[5%] flex justify-center items-center">
          <img
            src="../src/assets/close.svg"
            height={24}
            width={24}
            className="rounded-full"
          />
        </Dialog.Close>
      </div>

      {/* horizontal line */}
      <div className="w-full h-[1px] bg-input_box_gray my-4" />

      {/* body */}
      <div>
        {/* profile and name */}
        <div className="flex gap-x-3 items-center">
          <div className="flex h-[40px] w-[40px]">
            <img
              src={user.profilePicture}
              height={40}
              width={40}
              className="rounded-full border-font_light_gray"
            />
          </div>

          <span className="font-bold text-[16px] text-white">Arun Deshan</span>
        </div>
        {/* input box */}
        <div className="mt-3">
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="flex p-0 w-full bg-transparent border-none text-white font-thin text-[16px] focus:ring-0 resize-none overflow-y-scroll stroke-background_light_blue"
            placeholder="What's on your mind, Silva?"
            rows={3}
          />
        </div>
        {/* image view box */}
        <div className="flex h-[220px] relative w-full border-[0.3px] border-input_box_gray rounded-md p-[6px] my-2">
          {/* close button */}
          <div
            onClick={() => handleCloseItem()}
            className="flex absolute top-3 right-3 h-[20px] w-[20px] justify-center items-center cursor-pointer rounded-full z-10"
          >
            <img
              src="../src/assets/close.svg"
              height={20}
              width={20}
              className="object-fill rounded-full"
            />
          </div>
          {postType ? (
            <div className="flex w-full justify-center">
              {postType === "image" ? (
                <img
                  src={itemSrc}
                  height={400}
                  className="object-contain rounded-md"
                />
              ) : (
                <video src={itemSrc} controls width="100%" />
              )}
            </div>
          ) : (
            <div className="flex bg-background_light_blue h-full w-full rounded-md justify-center items-center flex-col">
              {/* -------- */}
              <label
                onChange={handleFile}
                className="flex h-[35px] w-[35px] justify-center items-center bg-input_box_gray rounded-full cursor-pointer"
              >
                <img
                  src="../src/assets/add.png"
                  height={20}
                  width={20}
                  className="object-fill"
                />
                <input name="" type="file" id="formId" hidden />
              </label>
              <span className="text-[16px] font-light text-white">
                Add Photos/Videos
              </span>
              <span className="text-[12px] font-extralight text-font_dark_gray leading-[8px]">
                or drag and drop
              </span>
            </div>
          )}
        </div>
        {/* post button */}
        <button
          onClick={uploadImageHandler}
          className="w-full h-[40px] bg-button_blue rounded-md text-white text-[16px] font-normal mt-2"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default UploadCardModal;
