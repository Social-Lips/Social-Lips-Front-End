import { useState } from "react";
import axios from "axios";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // const response = await fetch("http://localhost:8800/api/auth/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });

    // const json = await response.json();

    // if (!response.ok) {
    //   setIsLoading(false);
    //   alert("error");

    //   setError(json.error);
    // }
    // if (response.ok) {
    //   setIsLoading(false);
    //   alert("ok");
    // }

    // axios create
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8800/api/auth/register",
      data: JSON.stringify({ email, password }),
    })
      .then((res) => {
        setIsLoading(false);
        alert("ok");
      })
      .catch((err) => {
        setIsLoading(false);
        alert("error");
        setError(err);
      });
  };

  return { signup, isLoading, error };
};
