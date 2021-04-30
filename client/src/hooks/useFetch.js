import { useEffect, useState } from 'react';

//Hook para llamado de la url a traves de fetch
const useFetch = initialUrl => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (!url) return;
    setInProgress(true);
    setData(null);
    setError(null);
    fetch(url)
      .then(r => r.json())
      .then(data => {
        setInProgress(false);
        if (data.cod >= 400) {
          //Mensaje error ciudad no encontrada
          setError(data.message);
          return;
        }
        //Datos obtenidos
        setData(data);
      })
      .catch(error => {
        setInProgress(false);
        setError(error);
      })
  }, [url]);

  return { data, error, inProgress, setUrl };

};

export default useFetch;