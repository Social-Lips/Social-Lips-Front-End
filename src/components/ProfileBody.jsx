import React, { useState } from "react";

const ProfileBody = () => {
  const [isActive, setIsActive] = useState("Posts");
  return (
    <main>
      {/* navigation */}
      <section className="flex justify-left items-center gap-x-8 my-5">
        {["Posts", "Photos", "Videos", "About"].map((item) => (
          <button
            className={
              isActive !== item
                ? "text-[16px] text-[#9A9A9A] cursor-pointer"
                : "text-white"
            }
            onClick={() => setIsActive(item)}
          >
            {item}
          </button>
        ))}
      </section>
      <div className="w-[260px] h-[1px] bg-input_box_gray" />
    </main>
  );
};

export default ProfileBody;
