import React, { useEffect } from "react";
import { useGetUsers } from "../hooks/useGetUsers";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

const FollowYouCard = ({ cardTitle }) => {
  const { user } = useAuthContext();
  const { getUsers, isLoading, error, users } = useGetUsers();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    await getUsers(user._id);
  };

  return (
    <div className=" bg-background_light_blue rounded-lg p-6 w-[380px] sticky top-[8vh]">
      <h1 className="font-semibold text-[24px] text-white pb-2">{cardTitle}</h1>
      {!isLoading &&
        users.map((user, index) => (
          <Link key={index} to={`/profile/${user._id}`}>
            <div className="flex justify-between items-center m-3">
              {/* profile image and name */}
              <div className="flex gap-x-4">
                {/* image */}
                <div className="h-[40px] w-[40px] flex">
                  <img
                    src={user.profilePicture}
                    height={50}
                    width={50}
                    className="object-cover rounded-full"
                  />
                </div>

                {/* name and user name */}
                <div className="leading-4">
                  <h2 className="font-semibold text-[16px] text-white">
                    {user?.first_name} <span>{user?.last_name}</span>
                  </h2>
                  <p className="font-thin text-[12px] text-font_light_gray">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* follow button */}
              <button className="h-[30px] w-[80px] bg-white rounded-full font-bold text-[12px]">
                Follow
              </button>

              {/* horizontal line */}
            </div>
            <div className="w-full h-[1px] bg-input_box_gray" />
          </Link>
        ))}
    </div>
  );
};

export default FollowYouCard;
