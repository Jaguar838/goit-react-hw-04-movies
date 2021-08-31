import { NavLink } from 'react-router-dom';
import { LoaderUI } from 'UI';
import { PaginationBox } from 'UI';
import pathIMG from 'services/pathIMG';
import css from './ListMovie.module.css';

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
        <LoaderUI />
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
          <PaginationBox
            count={total}
            currentPage={currentPage}
            onChangePage={onChangePage}
          />
        </div>
      )}
    </>
  );
}
