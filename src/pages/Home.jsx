import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import axios from "axios";
import { useVideoUpload } from "../hooks/useVideoUpload";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";

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

  return (
    <main className="">
      <NavBar />
      <Feed />
    </main>
  );
}

export default Home;
