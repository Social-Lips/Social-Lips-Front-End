import React, { useEffect } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGetPosts } from "../hooks/useGetPosts";
import { useParams } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";

const Profile = () => {
  // const { user } = useAuthContext();
  const { getPosts, isLoading, error, posts } = useGetPosts();
  const {
    getUser,
    user,
    isLoading: userIsLoading,
    error: userError,
  } = useGetUser();
  const { id } = useParams();

  useEffect(() => {
    getAllPosts();
    _getUser();
  }, []);

  const getAllPosts = async () => {
    await getPosts(id);
  };

  const _getUser = async () => {
    await getUser(id);
  };

  return (
    <main className="max-w-[1100px] pt-[8vh] mx-auto">
      {/* profile screen header */}
      {!userIsLoading && <ProfileHeader user={user[0]} />}

      {/* gray color line */}
      <div className="w-full h-[1px] bg-input_box_gray mt-[50px]" />

      {/* profile screen body */}
      {!isLoading && <ProfileBody posts={posts} user={user[0]} />}
    </main>
  );
};

export default Profile;
