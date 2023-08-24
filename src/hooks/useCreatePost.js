import axios from "axios";
import { useState } from "react";

export const useCreatePost = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [newPost, setNewPost] = useState(null);

  const createPost = async (user_id, description, file, postType) => {
    setIsLoading(true);
    setError(null);

    const frmData = new FormData();
    frmData.append("file", file);
    frmData.append("user_id", user_id);
    frmData.append("description", description);
    frmData.append("postType", postType);

    axios({
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      url: "http://localhost:8800/api/posts",
      data: frmData,
    })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setNewPost(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
        alert("Error");
      });
  };

  return { createPost, newPost, isLoading, error };
};
