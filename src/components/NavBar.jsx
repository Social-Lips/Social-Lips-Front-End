import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";
import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";
import { useEffect } from "react";

const NavBar = () => {
  const { logout } = useLogOut();
  const { user: adminUser } = useAuthContext();
  const { getUser, user } = useGetUser();

  useEffect(() => {
    _getUser();
  }, []);

  const _getUser = async () => {
    await getUser(adminUser?._id);
  };

  const handleClick = () => {
    logout();
  };
  return (
    <nav className="bg-background_dark_blue h-[8vh] flex justify-between items-center backdrop-blur-md px-4 fixed w-full z-50">
      {/* image and searchbox */}
      <div className="flex justify-center items-center gap-x-1">
        <Link to={"/"}>
          <img src="../src/assets/logo.png" height={50} width={50} />
        </Link>
        <input
          type="text"
          className="h-[40px] w-[250px] rounded-full pl-5 text-[12px] font-extralight bg-input_box_gray border-none text-white"
          placeholder="#Explore"
        />
      </div>

      {/* home button, notification button, profile button */}
      <Dialog.Root>
        <div className="flex justify-center items-center gap-x-1">
          <Link to={`/`}>
            <div className="bg-white h-[36px] w-[90px] flex justify-center items-center rounded-full gap-1 cursor-pointer">
              <img src="../src/assets/home1.svg" height={22} width={22} />
              <p className="text-[12px] font-bold">Home</p>
            </div>
          </Link>

          <div className="relative cursor-pointer">
            <img src="../src/assets/bell.svg" height={24} width={24} />
            <div className="absolute h-[12px] w-[12px] rounded-full bg-button_blue top-0 right-0 border-[1.5px] border-background_dark_blue" />
          </div>

          <div className="bg-input_box_gray w-[1px] h-[40px] mx-3" />
          <Dialog.Trigger>
            <div className="h-[45px] w-[45px] flex cursor-pointer">
              <img
                src={user[0]?.profilePicture}
                height={45}
                width={45}
                className="rounded-full ml-[2px] object-cover border-2 border-button_blue"
              />
            </div>
          </Dialog.Trigger>
        </div>
        <Dialog.Content className="fixed flex justify-center items-center p-3 top-[8vh] right-[16px] bg-background_light_blue rounded-3xl shadow-2xl shadow-black duration-500">
          <div className="bg-input_box_gray w-[350px] rounded-3xl flex flex-col">
            {/* ---------- */}
            <div className="flex items-center px-5 pt-5">
              <div className="h-[55px] w-[55px] flex mr-4">
                <img
                  src={user[0]?.profilePicture}
                  height={55}
                  width={55}
                  className="object-cover rounded-full border-2 border-button_blue"
                />
              </div>
              <div className="flex flex-col leading-4">
                <span className="text-[16px] font-normal text-white">
                  {user[0]?.first_name} <span>{user[0]?.last_name}</span>
                </span>
                <span className="text-[12px] font-thin text-white">
                  {user[0]?.email}
                </span>
              </div>
            </div>
            {/* ----- */}
            <Link
              to={`/profile/${user[0]?._id}`}
              className="flex justify-center items-center px-5 py-2"
            >
              <div className="h-[55px] w-[55px] flex mr-4" />
              <button className="text-[12px] font-normal text-white border-[0.3px] border-white w-full flex justify-center items-center py-2 rounded-lg">
                Edit your Account
              </button>
            </Link>

            {/* ------ */}
            <div className="w-full bg-font_light_gray h-[0.3px]" />

            {/* ------------- */}
            <button
              onClick={handleClick}
              className="flex items-center rounded-b-3xl px-5 py-2 hover:bg-background_light_blue duration-300"
            >
              <div className="h-[55px] w-[55px] flex mr-4 justify-center items-center">
                <img
                  src="../src/assets/signout.svg"
                  height={35}
                  width={35}
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-normal text-white">
                  Sign out of Account
                </span>
              </div>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </nav>
  );
};

export default NavBar;
