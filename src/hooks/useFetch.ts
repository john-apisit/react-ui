import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };

    loadData();
  }, [url]);

  return { data };
};

export default useFetch;
