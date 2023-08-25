import { useState, useEffect } from "react";
import axios from "axios"; // You might need to install and configure an HTTP client like axios

export const useUnFollowUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const unFollowUser = async (paramsId, userId) => {
    setLoading(true);
    axios({
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      url: `http://localhost:8800/api/users/${paramsId}/unfollow`,
      data: JSON.stringify({
        userId,
      }),
    })
      .then((res) => {
        setLoading(false);
        setResult(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return {
    loading,
    error,
    result,
    unFollowUser,
  };
};
