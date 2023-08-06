import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";

const Profile = () => {
  return (
    <main className="max-w-[1100px] pt-[8vh] mx-auto">
      {/* profile screen header */}
      <ProfileHeader />

      {/* gray color line */}
      <div className="w-full h-[1px] bg-input_box_gray mt-[50px]" />

      {/* profile screen body */}
      <ProfileBody />
    </main>
  );
};

export default Profile;
