import { useEffect, useRef, useState } from "react";

function useFetchData(page, limit) {
  const isInitialRender = useRef(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async (page, limit) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.weekday.technology/adhoc/getSampleJdJSON?limit=${limit}&offset=${page}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res) {
        throw new Error("Something went wrong");
      }
      const response = await res.json();

      setData((prev) => [...prev, ...response?.jdList]);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    fetchData(page, limit);
  }, [limit, page]);

  return { data, loading, error };
}

export default useFetchData;
