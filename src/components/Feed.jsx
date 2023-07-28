import React from "react";
import ProfileCard from "./ProfileCard";
import FollowYouCard from "./FollowYouCard";

const Feed = () => {
  return (
    <div className="pt-[60px] px-4 flex justify-center gap-x-2 ">
      {/* left column */}
      <div className=" h-[90vh] w-[380px] gap-y-2 flex flex-col relative">
        {/* profile card */}
        <ProfileCard />

        {/* Who is to follow you card */}
        <FollowYouCard />
      </div>

      {/* middle column */}
      <div className="bg-red-400 h-[473px] w-[680px]">middle</div>

      {/* right column */}
      <div className="bg-red-400 h-[473px] w-[300px]">right</div>
    </div>
  );
};

export default Feed;
