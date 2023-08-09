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
import { useGetUsers } from "../hooks/useGetUsers";
import { useGetUser } from "../hooks/useGetUser";

const Feed = () => {
  const { user: adminUser } = useAuthContext();
  const { getPosts, isLoading, error, posts } = useGetPosts();
  const {
    getUser,
    user,
    isLoading: userIsLoading,
    error: userError,
  } = useGetUser();

  useEffect(() => {
    getAllPosts();
    _getUser();
  }, []);

  const getAllPosts = async () => {
    await getPosts(adminUser._id);
  };
  const _getUser = async () => {
    await getUser(adminUser._id);
  };
  return (
    <div className="pt-[60px] px-4 flex justify-center gap-x-2">
      {/* left column */}
      <div className="h-[90vh] w-[380px] gap-y-2 flex flex-col relative">
        {/* profile card */}
        <ProfileCard user={user[0]} />

        {/* Who is to follow you card */}
        <FollowYouCard cardTitle={"Who is to follow you"} />
      </div>

      {/* middle column */}
      <div className="h-[473px] w-[680px] flex flex-col">
        <UploadCard user={user[0]} />
        {posts &&
          posts.map((post, index) => (
            <PostCard post={post} user={user[0]} key={index} />
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
