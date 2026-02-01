import { useEffect, useState } from "react";
import axios from "axios";

export function HomePage() {
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

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-10">
      {data && (
        <div>
          <h1 className="text-3xl">{data.location?.name}</h1>
          <p>Temperature: {data.current?.temp_c}°C</p>
          <p>Condition: {data.current?.condition?.text}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
