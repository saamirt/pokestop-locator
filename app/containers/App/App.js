/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import SearchPage from 'containers/SearchPage/Loadable';
import ResultsPage from 'containers/ResultsPage/Loadable';
import PokestopPage from 'containers/PokestopPage/Loadable';
import SubmissionPage from 'containers/SubmissionPage/Loadable';
import RegistrationPage from 'containers/RegistrationPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

import BGImage from './../../images/bg.png';

const App = () => {
  return (
    <div className="app-wrapper">
      <Helmet
        titleTemplate="%s - Aamir Basic App"
        defaultTitle="React Boilerplate App"
      >
        <meta
          name="description"
          content="A basic boilerplate for future react apps"
        />
      </Helmet>
      <Header />
      <main>
        <div
          id="main-body"
          style={{ backgroundImage: `url(${BGImage})` }}
          className="album py-5 bg-light"
        >
          <div className="container">
            <Switch>
              <Route exact path="/" component={SearchPage} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/results" component={ResultsPage} />
              <Route exact path="/pokestop" component={PokestopPage} />
              <Route exact path="/submission" component={SubmissionPage} />
              <Route exact path="/registration" component={RegistrationPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
