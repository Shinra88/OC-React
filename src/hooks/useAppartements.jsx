import { useState, useEffect } from "react";

export const useAppartements = () => {
    const [appartements, setAppartements] = useState([]);
    useEffect(() => {
      const abortController = new AbortController();
fetch("/backend.json", { signal: abortController.signal })
.then((res) => res.json())
.then((res) => setAppartements(res))
.catch(console.error);

       return () => {
abortController.abort();
    };
  }, []);
return appartements;
  };