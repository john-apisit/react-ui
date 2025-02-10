import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();

  const loadData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return { data };
};

export default useFetch;
