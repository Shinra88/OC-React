import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useAppartement() {
  
  const appartementId = useParams().logementId
  // const appartementId = appartementSlug.split('-')[0]
  const [appartement, setAppartement] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {

    const abortController = new AbortController();

    fetch("/backend.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((logements) => {
        const logement = logements.find((logement) => logement.id === appartementId);
        setAppartement(logement);
    setIsLoading(false);
      })
      .catch(console.error);


    return () => {
      abortController.abort();
      };
 }, [appartementId]);
  return [appartement, isloading];
};
