import React from "react";
import {
  ProfileCard,
  FollowYouCard,
  UploadCard,
  PostCard,
} from "../components";
import FollowingCard from "./FollowingCard";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGetPosts } from "../hooks/useGetPosts";
import { useEffect } from "react";

const Feed = () => {
  const { user } = useAuthContext();
  const { getPosts, isLoading, error, posts } = useGetPosts();

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    await getPosts(user.userId);
  };
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
        {posts &&
          posts.map((post, index) => (
            <PostCard post={post} user={user} key={index} />
          ))}
      </div>

      {/* right column */}
      <div className="h-[473px] w-[300px]">
        <FollowingCard />
      </div>
    </div>
  );
};

export default Feed;
