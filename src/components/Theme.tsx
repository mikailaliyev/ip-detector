import { useState } from "react";

export const Theme = () => {
  const [switcher, setSwitcher] = useState("dark");
  const handleTheme = (e: any) => {
    e.target.innerText === "dark"
      ? (setSwitcher("light"), document.body.classList.add("dark"))
      : (setSwitcher("dark"), document.body.classList.remove("dark"));
  };
  return (
    <div className="theme-switcher">
      <button onClick={(e) => handleTheme(e)} className="switch-btn">
        {switcher}
      </button>
    </div>
  );
};
