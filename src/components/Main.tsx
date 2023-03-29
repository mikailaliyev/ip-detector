import { useEffect, useState } from "react";

export const Main = () => {
  const [data, setData] = useState({});

  const handleData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_APP_API);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
      alert("Turn off AdBlock to use the site\nthere is no adds here ☺");
    }
  };

  useEffect(() => {
    handleData();
  }, []);
  return <div className="main-content">{data.city}</div>;
};
