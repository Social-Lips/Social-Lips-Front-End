import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import axios from "axios";
import { useVideoUpload } from "../hooks/useVideoUpload";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import ReactPlayer from "react-player";

function Home() {
  return (
    <main className="">
      <Feed />
    </main>
  );
}

export default Home;
