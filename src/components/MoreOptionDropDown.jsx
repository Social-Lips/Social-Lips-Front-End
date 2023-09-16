import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const MoreOptionDropDown = ({ adminId, userId, _deletePost }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="absolute right-4 top-4 cursor-pointer">
          <img
            src="../src/assets/dots.png"
            height={20}
            width={20}
            className="object-cover"
          />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-background_light_blue shadow-2xl shadow-black rounded-md p-[5px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          {adminId === userId ? (
            <>
              <DropdownMenu.Item className="group text-[14px] leading-none rounded-[3px] flex items-center h-[40px] px-[5px] relative gap-x-4 pl-[15px] select-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-input_box_gray text-white">
                <img
                  src="../src/assets/edit.png"
                  height={20}
                  width={20}
                  className="object-cover"
                />
                Edit Post
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onClick={() => _deletePost()}
                className="group text-[14px] leading-none rounded-[3px] flex items-center h-[40px] px-[5px] relative gap-x-4 pl-[15px] select-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-input_box_gray text-white"
              >
                <img
                  src="../src/assets/delete.png"
                  height={20}
                  width={20}
                  className="object-cover"
                />
                Delete Post
              </DropdownMenu.Item>
            </>
          ) : (
            <DropdownMenu.Item className="group text-[14px] leading-none rounded-[3px] flex items-center h-[40px] px-[5px] relative gap-x-4 pl-[15px] select-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-input_box_gray text-white">
              <img
                src="../src/assets/report.png"
                height={20}
                width={20}
                className="object-cover"
              />
              Report Post
            </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MoreOptionDropDown;
