import React from "react";

const FollowYouCard = () => {
  return (
    <div className="max-h-full bg-background_light_blue rounded-lg overflow-y-scroll p-6">
      <h1 className="font-semibold text-[24px] text-white pb-2">
        Who is to follow you
      </h1>

      {[1, 1, 1, 1, 1, 1].map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center m-3">
            {/* profile image and name */}
            <div className="flex gap-x-4">
              {/* image */}
              <div className="h-[40px] w-[40px] flex">
                <img
                  src="../src/assets/perera.jpg"
                  height={50}
                  width={50}
                  className="object-cover rounded-full"
                />
              </div>

              {/* name and user name */}
              <div className="leading-4">
                <h2 className="font-semibold text-[16px] text-white">
                  L.M Perera
                </h2>
                <p className="font-thin text-[12px] text-font_light_gray">
                  @lmpereea
                </p>
              </div>
            </div>

            {/* follow button */}
            <button className="h-[30px] w-[80px] bg-white rounded-full font-bold text-[12px]">
              Follow
            </button>

            {/* horizontal line */}
          </div>
          <div className="w-full h-[1px] bg-input_box_gray" />
        </div>
      ))}
    </div>
  );
};

export default FollowYouCard;
