import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffilne = () => {
    setIsOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffilne);

    return () => {
      window.removeEventListener("online", handleOnline);

      window.removeEventListener("offline", handleOffilne);
    };
  }, []);

  return isOnline;
};

export default useOnline;
