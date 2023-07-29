import React from "react";
import {
  ProfileCard,
  FollowYouCard,
  UploadCard,
  PostCard,
} from "../components";
import FollowingCard from "./FollowingCard";

const Feed = () => {
  return (
    <div className="pt-[60px] px-4 flex justify-center gap-x-2">
      {/* left column */}
      <div className="h-[90vh] w-[380px] gap-y-2 flex flex-col relative">
        {/* profile card */}
        <ProfileCard />

        {/* Who is to follow you card */}
        <FollowYouCard />
      </div>

      {/* middle column */}
      <div className="h-[473px] w-[680px] flex flex-col gap-y-2">
        <UploadCard />
        <PostCard />
      </div>

      {/* right column */}
      <div className="h-[473px] w-[300px]">
        <FollowingCard />
      </div>
    </div>
  );
};

export default Feed;
