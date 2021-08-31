import { useState, useEffect, Suspense } from 'react';
import { lazy } from 'react';
import {
  useParams,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import LoaderUI from 'UI/LoaderUI/LoaderUI';
import moviesAPI from 'services/moviesAPI';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import css from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    moviesAPI.getDetailsID(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <MovieDetails {...movie} />

      <nav className={css.nav}>
        <NavLink
          to={`${url}/cast`}
          className={css.link}
          activeClassName={css.active}
        >
          Cast
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={css.link}
          activeClassName={css.active}
        >
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<LoaderUI />}>
        <Switch>
          <Route path={`${url}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${url}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
