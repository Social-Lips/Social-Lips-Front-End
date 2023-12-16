import axios from "axios";
import { useState } from "react";

export const useGenerateSub = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [result, setResult] = useState(null);

  const generateSub = async (_postId) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    //657d48f5fe42e0de63f2fe50

    axios({
      method: "GET",
      headers: { "Content-Type": "multipart/form-data" },
      url: `https://social-lips-398506.et.r.appspot.com/mongo/${_postId}`,
      params: { _postId },
    })
      .then((res) => {
        setIsLoading(false);
        console.log("Sub added successfully");
        // setResult("Upload Successfully");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        // setResult("Can't Uploaded");
      });
  };

  return { generateSub, isLoading, error, result, setIsLoading };
};
