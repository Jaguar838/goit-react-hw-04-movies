import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoaderUI from 'UI/LoaderUI/LoaderUI';
// import { NotFoundView } from 'views/NotFoundView';
// import { ROUTE_PATHS } from 'services/route-paths';
const HomeView = lazy(() =>
  import('views/HomePage/HomePage' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import('views/MoviesView.js' /* webpackChunkName: "movies-view" */),
);
const NotFoundView = lazy(() =>
  import(
    'views/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-view" */
  ),
);
const MovieDetailsView = lazy(() =>
  import(
    'views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-view" */
  ),
);
const App = () => {
  return (
    <>
      <Suspense fallback={<LoaderUI />}>
        <Switch>
          {/* <Route path={ROUTE_PATHS._()} exact component={ContactsView} /> */}
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
