import React, { useState } from "react";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";
import axios from "axios";

const imgURL =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

function Home(props) {
  const [files, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleFile(e) {
    setFile(e.target.files[0]);
  }

  const uploadHandler = () => {
    if (!files) return;
    setIsLoading(true);
    const frmData = new FormData();
    frmData.append("file", files);
    axios({
      method: "POST",
      url: "http://localhost:8800/upload",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: frmData,
      onUploadProgress: (data) => {
        console.log(Math.round((100 * data.loaded) / data.total));
      },
    })
      .then((res) => {
        console.log(res);
        // setIsLoading(false);
        // setProgress((res.data.loaded / res.data.total) * 100);
        // console.log((res.data.loaded / res.data.total) * 100);
      })
      .catch((err) => console.log(err));

    // axios
    //   .post("http://localhost:8800/upload", {
    //     file: files,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // axios
    //   .get("http://localhost:8800/list")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  };

  return (
    <div className="bg-slate-800 mx-auto max-w-xl flex flex-col mt-5 p-3 rounded-md gap-3">
      <div className="flex justify-between gap-3">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src={imgURL}
        />
        <input
          type="text"
          className="rounded-md w-full bg-slate-700 border-0 text-white"
          placeholder="What's happening?"
        />
      </div>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <label
            onChange={handleFile}
            htmlFor="formId"
            className="w-full self-center bg-blue-800 rounded-md text-lg font-semibold text-white p-2 flex justify-center cursor-pointer"
          >
            <p className="cursor-pointer">Choose video</p>
            <input name="" type="file" id="formId" hidden className="w-1/2" />
          </label>
        </div>
        <button
          className="w-1/2 self-center bg-blue-800 rounded-md text-lg font-semibold text-white p-2 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={files === ""}
          onClick={uploadHandler}
        >
          Upload
        </button>
      </div>
      {isLoading ? <h1>Loading</h1> : <h1>Ok..</h1>}
    </div>
  );
}

export default Home;
