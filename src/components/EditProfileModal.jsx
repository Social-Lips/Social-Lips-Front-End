import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const EditProfileModal = ({ closeDialog }) => {
  return (
    <>
      <div className="w-full flex justify-end mb-8">
        <Dialog.Close className="">
          <img
            src="../src/assets/close.svg"
            height={24}
            width={24}
            className="rounded-full hover:border-[1px] border-font_light_gray"
          />
        </Dialog.Close>
      </div>

      <Dialog.Title className="text-[32px] w-full font-bold leading-6">
        Edit Your Profile
      </Dialog.Title>

      <Dialog.Description className="w-full text-[16px] text-font_light_gray font-thin mb-6">
        Make changes to your profile here. Click save when you're done.
      </Dialog.Description>

      {/* name */}
      <fieldset className="flex w-full justify-between items-center">
        <input
          type="text"
          placeholder="First Name"
          className="edit-form-input  w-[200px]"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="edit-form-input  w-[200px]"
        />
      </fieldset>

      {/* studying at */}
      <fieldset className="w-full">
        <input
          type="email"
          placeholder="Studying at"
          className="edit-form-input  w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>

      {/* Lives in */}
      <fieldset className="w-full">
        <input
          type="email"
          placeholder="Lives in"
          className="edit-form-input  w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>

      {/* work at */}
      <fieldset className="w-full">
        <input
          type="email"
          placeholder="Work at"
          className="edit-form-input  w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>

      {/* in a relationship */}
      <fieldset className="w-full">
        <select
          className="edit-form-input  w-full"
          onChange={(e) => setEmail(e.target.value)}
        >
          <option selected disabled>
            In a Relationship
          </option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
      </fieldset>

      {/* profile picture */}
      <div className="w-full edit-form-input flex justify-start">
        <div className="flex justify-center items-center">
          <p className="font-light text-font_light_gray text-[14px] mx-4">
            Profile Picture
          </p>
          <label
            //   onChange={handleFile}
            htmlFor="formId"
            className="w-[100px] h-[30px] self-center bg-font_dark_gray text-sm font-normal flex justify-center items-center text-white cursor-pointer"
          >
            <p className="text-black text-[12px]">Choose Picture</p>
            <input name="" type="file" id="formId" hidden />
          </label>
        </div>
      </div>

      {/* cover picture */}
      <div className="w-full edit-form-input flex justify-start">
        <div className="flex justify-center items-center">
          <p className="font-light text-font_light_gray text-[14px] mx-4">
            Cover Picture
          </p>
          <label
            //   onChange={handleFile}
            htmlFor="formId"
            className="w-[100px] h-[30px] self-center bg-font_dark_gray text-sm font-normal flex justify-center items-center text-white cursor-pointer"
          >
            <p className="text-black text-[12px]">Choose Picture</p>
            <input name="" type="file" id="formId" hidden />
          </label>
        </div>
      </div>

      {/* save button */}
      <div className="flex justify-end w-full my-5">
        <button className="w-[120px] h-[40px] border-[0.2px] rounded-lg border-background_dark_blue font-bold text-[14px] bg-background_dark_blue text-white hover:bg-transparent hover:text-background_dark_blue">
          Save changes
        </button>
      </div>
    </>
  );
};

export default EditProfileModal;
