import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';

const Footer = React.lazy(() => import('./components/footer/Footer'));
const Nav = React.lazy(() => import('./components/nav/Nav'));
// const PageNav = React.lazy(() => import('./components/nav/PageNav'));
const Home = React.lazy(() => import('./components/page/Home'));
const Project = React.lazy(() => import('./components/page/Project'));
const Skill = React.lazy(() => import('./components/page/Skill'));
const Who = React.lazy(() => import('./components/page/Who'));
const Contact = React.lazy(() => import('./components/page/Contact'));

function AppContents() {
  return (
    <div id="wrap" className="main">
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <div id="container">
            <Route component={Nav} />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/project" component={Project} />
              <Route path="/skill" component={Skill} />
              <Route path="/who" component={Who} />
              <Route path="/contact" component={Contact} />
              <Redirect to="/home" />
            </Switch>
          </div>

          <div id="footer">
            {/* <Route component={PageNav} /> */}

            <Route component={Footer} />
          </div>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default AppContents;
