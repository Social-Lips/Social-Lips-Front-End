import React from "react";
import dummyProfileImage from "../assets/dummy-profile.jpeg";
import * as Dialog from "@radix-ui/react-dialog";
import UploadCardModal from "./UploadCardModal";

const UploadCard2 = ({ user }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex bg-background_light_blue px-5 py-4 rounded-lg justify-between mb-2 cursor-pointer">
          {/* image div */}
          <div className="h-[40px] w-405px] flex">
            <img
              src={user?.profilePicture || dummyProfileImage}
              height={40}
              width={40}
              className="object-cover rounded-full"
            />
          </div>

          {/* input fields */}
          <div className="flex flex-col">
            <div className="h-[40px] w-[590px] pl-3 flex items-center rounded-full bg-input_box_gray text-font_dark_gray text-[14px] font-extralight border-none">
              What's on your mind, GA?
            </div>

            {/*three buttons  */}
            <div className="flex justify-around items-center gap-x-3 mt-5">
              {/* 1 */}
              <div className="flex justify-center gap-x-3 items-center h-[50px] w-full rounded-xl  text-[16px] font-thin text-white border-[1px] border-input_box_gray">
                <img
                  src="../src/assets/image.svg"
                  height={20}
                  width={20}
                  className="object-contain"
                />
                Photo
              </div>

              {/* 2 */}
              <div className="flex justify-center gap-x-3 items-center h-[50px] w-full  rounded-xl text-[16px] font-thin text-white cursor-pointer border-[1px] border-input_box_gray">
                <img
                  src="../src/assets/video.svg"
                  height={20}
                  width={20}
                  className="object-contain"
                />
                Video
              </div>
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Overlay className="bg-black/60 h-screen w-screen fixed inset-0 z-40" />

      <Dialog.Content
        className="fixed flex justify-center items-center flex-col py-5 px-8 w-[490px] top-1/2 right-1/2 bg-background_dark_blue transform translate-x-1/2 -translate-y-1/2 z-50 rounded-lg"
        style={{ minWidth: "450px" }}
      >
        <UploadCardModal />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default UploadCard2;
