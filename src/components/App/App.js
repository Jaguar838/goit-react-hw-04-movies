import { lazy, Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';
import { Layout } from 'UI';
import { LoaderUI } from 'UI';
import AppBar from 'components/AppBar/AppBar';

// import { NotFoundView } from 'views/NotFoundView';
import { ROUTE_PATHS } from 'services/route-paths';

const HomeView = lazy(() =>
  import('../../views/HomePage/HomePage' /* webpackChunkName: "home-view" */),
);

const SearchMoviesView = lazy(() =>
  import(
    '../../views/SearchMoviesPage/SearchMoviesPage' /* webpackChunkName: "movies-view" */
  ),
);

const MovieDetailsView = lazy(() =>
  import(
    '../../views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-view" */
  ),
);

const NotFoundView = lazy(() =>
  import(
    '../../views/NotFoundPage/NotFoundPage.jsx' /* webpackChunkName: "not-found-view" */
  ),
);

console.log('ROUTE_PATHS', ROUTE_PATHS);

const App = () => {
  return (
    <>
      <Layout>
        <AppBar />
        <Suspense fallback={<LoaderUI />}>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/movies" exact component={SearchMoviesView} />
            <Route path="/movies/:movieId" component={MovieDetailsView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
