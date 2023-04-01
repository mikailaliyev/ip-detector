import { useEffect, useState } from "react";

export const Main = () => {
  const [data, setData] = useState<any>({});
  const getData:any = sessionStorage.getItem("true")
  console.log(JSON.parse(getData))

  const handleData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_APP_API);
      const result = await response.json();
      console.log(result);
      setData(result);
      sessionStorage.setItem("true", JSON.stringify(result));
    } catch (error) {
      console.log(error);
      alert("Turn off AdBlock to use the site\nthere is no adds here ☺");
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("true")) {
      handleData();
      console.log("data fetching");
      return;
    }
    setData(JSON.parse(getData));
  }, []);
  return (
    <div className="main-content">
      <h1>Your ip: {data.ip}</h1>
      <h2>IP version: {data.version}</h2>
      <h2>Provider: {data.org}</h2>
      <h2>
        Location: {data.city}, {data.country_name}
      </h2>
    </div>
  );
};
