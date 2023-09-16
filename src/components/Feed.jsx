import React, { useState } from "react";
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
import PostUploadingAnimation from "./PostUploadingAnimation";
import { filteringUnfollowUsersId } from "../utils/filteringUnfollowUsersId";
import { useGetTimeLinePosts } from "../hooks/useGetTimeLinePosts";
import Loader from "./Loader";
import ProgressTracker from "./ProgressTracker";
import UploadCard2 from "./UploadCard2";

const Feed = () => {
  const { user: adminUser } = useAuthContext();
  const { getPosts, isLoading, error, posts } = useGetPosts();
  const {
    getTimelinePosts,
    timelinePosts,
    isLoading: timelinePostsLoading,
  } = useGetTimeLinePosts();
  const {
    getUser,
    user,
    isLoading: userIsLoading,
    error: userError,
  } = useGetUser();
  const {
    getUsers,
    users: allUsers,
    isLoading: allUsersLoading,
  } = useGetUsers();

  const [allPosts, setAllPosts] = useState(timelinePosts);
  const [newPost, setNewPost] = useState();
  const [isUploading, setIsUploading] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    getAllPosts();
    getAllUsers();
    _getUser();
    _getTimelinePosts();
  }, []);

  useEffect(() => {
    setAllPosts(timelinePosts);
  }, [timelinePostsLoading]);

  const getAllPosts = async () => {
    await getPosts(adminUser._id);
  };
  const _getTimelinePosts = async () => {
    await getTimelinePosts(adminUser._id);
  };
  const _getUser = async () => {
    await getUser(adminUser._id);
  };
  const getAllUsers = async () => {
    await getUsers(adminUser._id);
  };
  return (
    <div className="pt-[60px] px-4 flex justify-center gap-x-2 relative">
      {/* left column */}
      <div className="h-[90vh] w-[380px] gap-y-2 flex flex-col relative">
        {/* profile card */}
        <ProfileCard user={user[0]} />

        {/* Who is to follow you card */}
        <FollowYouCard
          cardTitle={"Who is to follow you"}
          allUsers={allUsers}
          filterIdArray={filteringUnfollowUsersId(
            allUsers,
            user[0]?.followings
          )}
          adminUser={user}
        />
      </div>

      {/* middle column */}
      <div className="h-[473px] w-[600px] flex flex-col">
        <UploadCard2
          user={user[0]}
          setAllPosts={setAllPosts}
          setIsUploading={setIsUploading}
          setNewPost={setNewPost}
          setUploadProgress={setUploadProgress}
        />
        {isUploading && <ProgressTracker progressValue={uploadProgress} />}

        {timelinePostsLoading && <Loader />}

        {newPost && (
          <PostCard post={newPost} postOwner={user[0]} adminUser={user[0]} />
        )}
        {isUploading && <PostUploadingAnimation />}

        {allPosts &&
          allPosts?.map((post, index) => (
            <PostCard
              post={post}
              postOwner={user[0]}
              adminUser={user[0]}
              key={index}
              setAllPosts={setAllPosts}
            />
          ))}
      </div>

      {/* right column */}
      <div className="h-[473px] w-[380px]">
        <FollowingCard adminUser={user} />
      </div>
    </div>
  );
};

export default Feed;
