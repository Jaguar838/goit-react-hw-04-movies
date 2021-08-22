import { NavLink } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import css from './ListMovie.module.css';
import pathIMG from 'services/pathIMG';
import Loader from 'react-loader-spinner';

export default function MovieList({
  movies,
  total,
  onChangePage,
  loading,
  currentPage,
}) {
  return (
    <>
      {loading ? (
        <Loader color="#ff0000" size="23" type="Rings" />
      ) : (
        <ul className={css.list}>
          {movies.map(movie => {
            const posterPath = pathIMG(movie.poster_path, 'w185');
            return (
              <li className={css.item} key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  <div className={css.imageWrapper}>
                    <img
                      className={css.image}
                      src={posterPath}
                      alt={movie.title}
                      width="186"
                    />
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}

      {total > 1 && !loading && (
        <div
          style={{
            backgroundColor: '#3958A8',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '5px',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <Pagination
            count={total}
            variant="outlined"
            shape="rounded"
            color="secondary"
            onChange={(event, pages) => {
              onChangePage(pages);
            }}
            page={currentPage}
          />
        </div>
      )}
    </>
  );
}
