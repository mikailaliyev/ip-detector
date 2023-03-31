import { useState } from "react";

export const Theme = () => {
  const [switcher, setSwitcher] = useState("dark");
  const handleTheme = () => {
    
  }
  return (
    <div className="theme-switcher">
      <button style={{ fontSize: "1rem", letterSpacing: "2px" }}>
        {switcher}
      </button>
    </div>
  );
};
