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

const imgURL =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

function Home(props) {
  const [files, setFile] = useState();
  const { videoUpload, isLoading } = useVideoUpload();

  function handleFile(e) {
    setFile(e.target.files[0]);
  }

  const uploadHandler = async () => {
    if (!files) return;
    await videoUpload(files);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8800/list")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const url =
    "https://social-lips.s3.amazonaws.com/015c57e7e9d5d24d9e14e79deb05a429e53bf50666a91e18618ab9af7f72959d";

  return (
    <main className="">
      <Feed />
      {/* <img
        src="https://social-lips.s3.ap-south-1.amazonaws.com/5714ED8D-F7D2-40E3-A7E1-0DBB411C119F.JPG"
        width={50}
      /> */}

      {/* <ReactPlayer controls={true} url={url} /> */}
    </main>
  );
}

export default Home;
