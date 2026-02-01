// import { useEffect, useState } from "react";
// import axios from "axios";
import WeekForcast from "./WeekForcast";
import HomeHeader from "./HomeHeader";
import Weather from "./Weather";

export function HomePage() {
  //  TODO: Fix the fetch after the Frontend design
  /*
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API;
  const API_URL = import.meta.env.VITE_WEATHER_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/current.json`, {
          params: {
            key: API_KEY,
            q: "Kathmandu", // or use user's location
            aqi: "no",
          },
        });
        setData(response.data);
        setError(null);
      } catch (error) {
        console.log("API Error: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (API_KEY && API_URL) {
      fetchData();
    }
  }, [API_KEY, API_URL]);

  if (loading)
    return <div className="mx-auto max-w-7xl px-4 py-10">Loading...</div>;
  if (error)
    return <div className="mx-auto max-w-7xl px-4 py-10">Error: {error}</div>;
  */

  return (
    <div className="mx-auto flex max-w-full items-center justify-center gap-8 px-4 py-10 h-screen">
      <div className="w-[80%]">
        <HomeHeader />
        <Weather />
        <WeekForcast />
      </div>
    </div>
  );
}

export default HomePage;
