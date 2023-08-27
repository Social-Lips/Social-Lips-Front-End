import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import EditProfileModal from "./EditProfileModal";
import { useAuthContext } from "../hooks/useAuthContext";
import dummyCoverImage from "../assets/dummy_cover.png";
import { useFollowUser } from "../hooks/useFollowUser";
import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";
import { useGetUser } from "../hooks/useGetUser";
import { useUnFollowUser } from "../hooks/useUnFollowUser";

const ProfileHeader = ({ paramsUser }) => {
  const { user: adminUser } = useAuthContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    followUser,
    loading,
    result: followResult,
    setResult: setFollowResult,
  } = useFollowUser();
  const {
    unFollowUser,
    loading: unFollowUserLoading,
    result: unFollowResult,
    setResult: setUnFollowResult,
  } = useUnFollowUser();
  const {
    getUser,
    user,
    isLoading: userIsLoading,
    error: userError,
  } = useGetUser();

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const buttonHandle = async (paramsId, userId, e) => {
    if (e.currentTarget.textContent === "Follow") {
      await handleFollowUser(paramsId, userId);
    } else {
      await handleUnFollowUser(paramsId, userId);
    }
  };

  const handleFollowUser = async (paramsId, userId) => {
    setUnFollowResult(null);
    await followUser(paramsId, userId);
  };
  const handleUnFollowUser = async (paramsId, userId) => {
    setFollowResult(null);
    await unFollowUser(paramsId, userId);
  };

  const _getUser = async () => {
    await getUser(adminUser._id);
  };

  useEffect(() => {
    _getUser();
  }, []);

  return (
    <div className="w-full relative">
      {/* cover image */}
      <div className="w-[1100px] h-[350px] flex relative bg-black rounded-xl ">
        <img
          src={paramsUser?.coverPicture || dummyCoverImage}
          height={350}
          width={1100}
          className="object-cover rounded-xl"
        />
        <div className="w-full h-full bg-gradient-to-t from-background_light_blue absolute rounded-xl" />
      </div>

      {/* profile image */}
      <div className="h-[200px] w-[200px] flex absolute top-2/3 transform -translate-y-[10%] border-[4px] border-background_dark_blue rounded-full">
        <img
          className="object-cover rounded-full"
          src={paramsUser?.profilePicture}
          height={200}
          width={200}
        />
      </div>

      {/* about and buttons */}
      <div className="flex justify-between items-center mt-4">
        {/* description */}
        <div className="text-white ml-[240px]">
          <h1 className="text-[32px] font-bold">
            {paramsUser?.first_name} <span>{paramsUser?.last_name}</span>
          </h1>
          <span className="text-[20px] font-extralight leading-3">
            {paramsUser?.bio}
          </span>
          <div className="flex justify-right items-center gap-x-5">
            <span className="text-[12px] font-extralight">
              {paramsUser?.followers.length} Followers
            </span>
            <div className="w-[1px] h-[20px] bg-input_box_gray" />
            <span className="text-[12px] font-extralight">
              {paramsUser?.followings.length} Followings
            </span>
          </div>
        </div>

        {/* buttons */}
        {!userIsLoading && (
          <div className="flex gap-x-3">
            {adminUser._id === paramsUser._id ? (
              <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <Dialog.Trigger>
                  <button
                    className="w-[110px] h-[40px] border-[0.2px] rounded-lg border-input_box_gray font-bold text-[14px] text-white hover:bg-white hover:text-black"
                    onClick={openDialog}
                  >
                    Edit Profile
                  </button>
                </Dialog.Trigger>
                <Dialog.Overlay className="bg-black/30 h-screen w-screen fixed inset-0 z-40" />
                <Dialog.Content
                  className="fixed flex justify-center items-center flex-col py-5 px-8 w-[490px] top-1/2 right-1/2 bg-white transform translate-x-1/2 -translate-y-1/2 animate-wiggle z-50 rounded-2xl drop-shadow-none"
                  style={{ minWidth: "300px" }}
                >
                  <EditProfileModal onClose={closeDialog} user={user} />
                </Dialog.Content>
              </Dialog.Root>
            ) : (
              <button
                onClick={(e) => buttonHandle(paramsUser._id, adminUser._id, e)}
                className="w-[110px] h-[40px] flex justify-center items-center border-[0.2px] rounded-lg border-input_box_gray font-bold text-[14px] bg-white hover:bg-transparent hover:text-white"
              >
                {loading || unFollowUserLoading ? (
                  <Spinner size={13} />
                ) : user[0]?.followings.includes(paramsUser._id) ? (
                  <>
                    <>{unFollowResult || <>Following</>}</>
                  </>
                ) : (
                  <>{followResult || <>Follow</>}</>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
