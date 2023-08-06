import React, { useEffect } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGetPosts } from "../hooks/useGetPosts";

const Profile = () => {
  const { user } = useAuthContext();
  const { getPosts, isLoading, error, posts } = useGetPosts();

  useEffect(() => {
    getAllPosts();
  }, [posts]);

  const getAllPosts = async () => {
    await getPosts(user.userId);
  };
  return (
    <main className="max-w-[1100px] pt-[8vh] mx-auto">
      {/* profile screen header */}
      <ProfileHeader user={user} />

      {/* gray color line */}
      <div className="w-full h-[1px] bg-input_box_gray mt-[50px]" />

      {/* profile screen body */}
      <ProfileBody posts={posts} user={user} />
    </main>
  );
};

export default Profile;
