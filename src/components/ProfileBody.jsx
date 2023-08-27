import React, { useEffect, useState } from "react";
import FollowYouCard from "./FollowYouCard";
import UploadCard from "./UploadCard";
import PostCard from "./PostCard";
import ProfileAbout from "./ProfileAbout";
import { useGetUser } from "../hooks/useGetUser";
import { useAuthContext } from "../hooks/useAuthContext";
import { useGetUsers } from "../hooks/useGetUsers";

const ProfileBody = ({ posts, user }) => {
  const { user: adminUserId } = useAuthContext();
  const { getUsers, isLoading, error, users: allUsers } = useGetUsers();

  const {
    getUser,
    user: adminUser,
    isLoading: userIsLoading,
    error: userError,
  } = useGetUser();

  const [isActive, setIsActive] = useState("Posts");

  const _getUser = async () => {
    await getUser(adminUserId._id);
  };

  const getAllUsers = async () => {
    await getUsers(adminUserId._id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    _getUser();
  }, []);

  return (
    <main>
      {/* navigation */}
      <section className="flex justify-left items-center gap-x-8 my-5 ">
        {["Posts", "Photos", "Videos", "About"].map((item) => (
          <button
            key={item}
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

      {/* horizontal line */}
      <div className="w-[260px] h-[1px] bg-input_box_gray" />

      {/* body content cards */}
      <section className="w-full h-fit flex mt-6 justify-between gap-x-4">
        {/* left side (Followers) cards */}
        <div className="">
          <ProfileAbout user={user} />
          <FollowYouCard
            cardTitle={"Followers"}
            allUsers={allUsers}
            filterIdArray={adminUser[0]?.followers}
            adminUser={adminUser}
          />
        </div>

        {/* right side cards */}
        <div className="w-full">
          {/* <UploadCard user={user} /> */}
          {posts &&
            posts.map((post, index) => (
              <PostCard
                post={post}
                postOwner={user}
                adminUser={adminUser[0]}
                key={index}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default ProfileBody;
