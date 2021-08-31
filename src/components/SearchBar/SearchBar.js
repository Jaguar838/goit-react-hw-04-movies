import { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import moviesAPI from 'services/moviesAPI';
import ListMovie from 'components/ListMovie/ListMovie';
import usePages from 'hooks/usePages';
import css from './SearchBar.module.scss';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import useLoader from 'hooks/useLoader';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  const { page, totalPage, handleChangePage, setTotalPage } = usePages();
  const { isLoading, setLoading } = useLoader();

  useEffect(() => {
    if (!value) return;

    setLoading(isLoading => !isLoading);

    moviesAPI
      .getSearchQuery(value, page)
      .then(([result, total_pages]) => {
        setMovies(result);
        setTotalPage(total_pages);
      })
      .finally(() => setLoading(isLoading => !isLoading));
  }, [setTotalPage, page, value, setLoading]);

  return (
    <>
      <div className={css.searchBarForm}>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          className={css.searchBarInput}
          placeholder={'input your query'}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      {movies && (
        <ListMovie
          movies={movies}
          total={totalPage}
          onChangePage={handleChangePage}
          loading={isLoading}
          currentPage={page}
        />
      )}
    </>
  );
}
