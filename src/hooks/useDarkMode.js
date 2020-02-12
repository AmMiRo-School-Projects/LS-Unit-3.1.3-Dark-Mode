import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("dark");

  useEffect(() => {
    const body = document.querySelector(body);
    if (value === true) {
      body.classList.add("dark-mode");
    } else if (value === false) {
      body.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};
