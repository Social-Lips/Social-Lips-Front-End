import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useCreatePost } from "../hooks/useCreatePost";
import { useAuthContext } from "../hooks/useAuthContext";
import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";

const videoType = [
  { value: "Sign", label: "Sign Language video" },
  { value: "Voice", label: "Voice Language video" },
];

const UploadCard = ({ user, setAllPosts, setIsUploading }) => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [postType, setPostType] = useState("");

  // const { user } = useAuthContext();
  const { createPost, newPost, isLoading, error } = useCreatePost();

  function handleFile(e) {
    setFile(e.target.files[0]);
    const _fileType = e.target.files[0].type;
    setPostType(_fileType.split("/")[0]);
  }

  const handleUpload = async () => {
    await createPost(user._id, description, file, postType);
  };

  useEffect(() => {
    setAllPosts((prev) => [newPost, ...prev]);
  }, [newPost]);

  useEffect(() => {
    setIsUploading(isLoading);
  }, [isLoading]);

  return (
    <div className="flex h-[245px] bg-background_light_blue px-5 py-4 rounded-lg justify-between">
      {/* image div */}
      <div className="h-[55px] w-[55px] flex">
        <img
          src={user?.profilePicture}
          height={55}
          width={55}
          className="object-cover rounded-full"
        />
      </div>

      {/* input fields */}
      <div className="flex flex-col justify-between">
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What is happening?"
          type="text"
          className="h-[55px] w-[560px] justify-center items-center rounded-lg bg-input_box_gray text-white text-[20px] font-extralight border-none mb-3"
        />

        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={videoType[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={false}
          name="language"
          options={videoType}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              // borderColor: state.isFocused ? "grey" : "red",
              height: "55px",
            }),
          }}
        />
        {/*three buttons  */}
        <div className="flex justify-between items-center mt-2">
          {/* 1 */}
          <button className="flex justify-center gap-x-2 items-center h-[50px] w-[160px] border-[1px] rounded-full border-input_box_gray text-[16px] font-thin text-white">
            <img
              src="../src/assets/image.svg"
              height={18}
              width={18}
              className="object-contain"
            />
            Photo
          </button>

          {/* 2 */}
          <label
            onChange={handleFile}
            className="flex justify-center gap-x-2 items-center h-[50px] w-[160px] border-[1px] rounded-full border-input_box_gray text-[16px] font-thin text-white cursor-pointer"
          >
            <img
              src="../src/assets/video.svg"
              height={18}
              width={18}
              className="object-contain"
            />
            <span>Video</span>
            <input name="" type="file" id="formId" hidden />
          </label>

          {/* 3 */}
          <button
            onClick={handleUpload}
            className="flex justify-center gap-x-2 items-center h-[50px] w-[160px] border-[1px] rounded-full border-none text-[16p18] font-semibold text-black bg-white"
          >
            {isLoading ? (
              <Spinner size={13} />
            ) : (
              <>
                <img
                  src="../src/assets/upload.svg"
                  height={18}
                  width={18}
                  className="object-contain"
                />
                Upload
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
