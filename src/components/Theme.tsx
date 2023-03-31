import { useState } from "react";

export const Theme = () => {
  const [switcher, setSwitcher] = useState("light");
  return (
    <div className="theme-switcher">
      <button>{switcher}</button>
    </div>
  );
};
