// useCustomHook.js
import { useState, useEffect } from 'react';

export const useCustomHook = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading };
};
