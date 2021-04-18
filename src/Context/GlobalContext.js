import React, {createContext, useEffect, useState} from 'react';

export const Context = createContext();

function GlobalContext ({children}){

  const [ search, setSearch ] = useState('');
  const [ trackName, setTrackName ] = useState('')
  const [ tracks, setTracks ] = useState({});
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ id, setId ] = useState(null);

  useEffect(()=>{

    fetch(`https://api.deezer.com/search?q=${trackName}`, {
        "method" : "GET"
    })
    .then(response => response.json())
    .then(response => {
      setLoading(false);
      setTracks(response);
    })
    .catch(error => {
      setError(true);
      console.error(error);
      setLoading(false);
    })
  }, [trackName])

  const value = {
    search,
    setSearch,
    error, 
    loading,
    setTrackName,
    tracks,
    id,
    setId,
  };

  return (
    <Context.Provider value = {value}>
      {children}
    </Context.Provider>
  );
}

export default GlobalContext;