import React, { useState, useEffect } from 'react';
import ListMovie from 'components/ListMovie/ListMovie';
import moviesAPI from 'services/moviesAPI';

const HomePage = () => {
  const [trandingPage, setTrandingPage] = useState([]);
  //   useEffect(() => {
  //     moviesAPI.getTrendingPage()
  //       ;
  //     return () => {
  //       cleanup;
  //     };
  //   }, [input]);
  return (
    <>
      <h1>Cписок трендов за неделю</h1>
      {trandingPage && <ListMovie></ListMovie>}
    </>
  );
};

export default HomePage;
