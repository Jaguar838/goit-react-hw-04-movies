import React, { useState, useEffect } from 'react';
import usePages from 'hooks/usePages';
import useLoader from 'hooks/useLoader';
import ListMovie from 'components/ListMovie/ListMovie';
import moviesAPI from 'services/moviesAPI';

const HomePage = () => {
  const [trandingFilms, setTrandingFilms] = useState([]);
  const { isLoading, setLoading } = useLoader();
  const { page, totalPage, setTotalPage, handleChangePage } = usePages();

  useEffect(() => {
    setLoading(isLoading => !isLoading);
    moviesAPI
      .getTrendingFilms(page)
      .then(([result, total]) => {
        setTrandingFilms(result);
        setTotalPage(total);
      })
      .finally(() => setLoading(isLoading => !isLoading));
  }, [page, setTotalPage, setLoading]);
  console.log(trandingFilms, totalPage, isLoading, page);
  return (
    <>
      <h1>Cписок трендов за неделю</h1>
      {trandingFilms && (
        <ListMovie
          movies={trandingFilms}
          total={totalPage}
          onChangePage={handleChangePage}
          loading={isLoading}
          currentPage={page}
        />
      )}
    </>
  );
};

export default HomePage;
