import React from "react";
import Select from "react-select";

const videoType = [
  { value: "Sign", label: "Sign Language video" },
  { value: "Voice", label: "Voice Language video" },
];

const UploadCard = () => {
  return (
    <div className="flex h-[245px] bg-background_light_blue px-5 py-4 rounded-lg justify-between">
      {/* image div */}
      <div className="h-[55px] w-[55px]">
        <img
          src="../src/assets/profile.jpg"
          height={55}
          width={55}
          className="object-cover rounded-full"
        />
      </div>

      {/* input fields */}
      <div className="flex flex-col justify-between gap-y-3">
        <input
          placeholder="What is happening?"
          type="text"
          className="h-[55px] w-[560px] justify-center items-center rounded-lg bg-input_box_gray text-white text-[20px] font-extralight border-none"
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
        <div className="flex justify-between items-center">
          <button className="flex justify-center gap-x-2 items-center h-[55px] w-[180px] border-[1px] rounded-full border-input_box_gray text-[20px] font-normal text-white">
            <img
              src="../src/assets/image.svg"
              height={25}
              width={25}
              className="object-contain"
            />
            Photo
          </button>
          <button className="flex justify-center gap-x-2 items-center h-[55px] w-[180px] border-[1px] rounded-full border-input_box_gray text-[20px] font-normal text-white">
            <img
              src="../src/assets/video.svg"
              height={25}
              width={25}
              className="object-contain"
            />
            Video
          </button>
          <button className="flex justify-center gap-x-2 items-center h-[55px] w-[180px] border-[1px] rounded-full border-none text-[20px] font-bold text-black bg-white">
            <img
              src="../src/assets/upload.svg"
              height={25}
              width={25}
              className="object-contain"
            />
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
