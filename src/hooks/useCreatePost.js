import axios from "axios";
import { useState } from "react";

export const useCreatePost = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const createPost = async (user_id, description, file) => {
    setIsLoading(true);
    setError(null);

    const frmData = new FormData();
    frmData.append("file", file);
    frmData.append("user_id", user_id);
    frmData.append("description", description);

    axios({
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      url: "http://localhost:8800/api/posts",
      data: frmData,
    })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  };

  return { createPost, isLoading, error };
};
