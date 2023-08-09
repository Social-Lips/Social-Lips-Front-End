import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const EditProfileModal = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [bio, setBio] = useState(user?.bio);
  const [studying, setStudying] = useState(user?.studying_at);
  const [lives, setLives] = useState(user?.lives_in);
  const [work, setWork] = useState(user?.work_at);
  const [relationship, setRelationship] = useState(user?.in_relationship);
  const [profilePic, setProfilePic] = useState(user?.profilePicture);
  const [coverPic, setCoverPic] = useState(user?.coverPicture);

  const { user: adminUser } = useAuthContext();
  const { updateUser, isLoading, error } = useUpdateUser();

  const handleSubmit = async () => {
    await updateUser(
      adminUser._id,
      firstName,
      lastName,
      bio,
      studying,
      lives,
      work,
      relationship,
      profilePic,
      coverPic
    );
  };

  const handleProfilePictureFile = (e) => {
    setProfilePic(e.target.files[0]);
  };
  const handleCoverPictureFile = (e) => {
    setCoverPic(e.target.files[0]);
  };

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
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="edit-form-input  w-[200px]"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </fieldset>

      {/* bio */}
      <fieldset className="w-full">
        <input
          type="text"
          placeholder="Bio"
          className="edit-form-input  w-full"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
      </fieldset>

      {/* studying at */}
      <fieldset className="w-full">
        <input
          type="text"
          placeholder="Studying at"
          className="edit-form-input  w-full"
          onChange={(e) => setStudying(e.target.value)}
          value={studying}
        />
      </fieldset>

      {/* Lives in */}
      <fieldset className="w-full">
        <input
          type="text"
          placeholder="Lives in"
          className="edit-form-input  w-full"
          onChange={(e) => setLives(e.target.value)}
          value={lives}
        />
      </fieldset>

      {/* work at */}
      <fieldset className="w-full">
        <input
          type="text"
          placeholder="Work at"
          className="edit-form-input  w-full"
          onChange={(e) => setWork(e.target.value)}
          value={work}
        />
      </fieldset>

      {/* in a relationship */}
      <fieldset className="w-full">
        <select
          className="edit-form-input  w-full"
          onChange={(e) => setRelationship(e.target.value)}
        >
          <option selected disabled>
            In a Relationship
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </fieldset>

      {/* profile picture */}
      <div className="w-full edit-form-input flex justify-start">
        <div className="flex justify-center items-center">
          <p className="font-light text-font_light_gray text-[14px] mx-4">
            Profile Picture
          </p>
          <label className="w-[100px] h-[30px] self-center bg-font_dark_gray text-sm font-normal flex justify-center items-center text-white cursor-pointer">
            <p className="text-black text-[12px]">Choose Picture</p>
            <input
              name="profilePic"
              type="file"
              hidden
              onChange={(e) => handleProfilePictureFile(e)}
            />
          </label>
        </div>
      </div>

      {/* cover picture */}
      <div className="w-full edit-form-input flex justify-start">
        <div className="flex justify-center items-center">
          <p className="font-light text-font_light_gray text-[14px] mx-4">
            Cover Picture
          </p>
          <label className="w-[100px] h-[30px] self-center bg-font_dark_gray text-sm font-normal flex justify-center items-center text-white cursor-pointer">
            <p className="text-black text-[12px]">Choose Picture</p>
            <input
              name="coverPic"
              type="file"
              hidden
              onChange={(e) => handleCoverPictureFile(e)}
            />
          </label>
        </div>
      </div>

      {/* save button */}
      <div className="flex justify-end w-full my-5">
        <button
          onClick={handleSubmit}
          className="w-[120px] h-[40px] border-[0.2px] rounded-lg border-background_dark_blue font-bold text-[14px] bg-background_dark_blue text-white hover:bg-transparent hover:text-background_dark_blue"
        >
          Save changes
        </button>
      </div>
    </>
  );
};

export default EditProfileModal;
