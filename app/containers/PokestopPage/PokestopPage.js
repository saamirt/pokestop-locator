/*
 *
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';
import { getLocation } from 'connected-react-router';

export default class PokestopPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const {
      loading,
      error,
      repos,
      username,
      onChangeUsername,
      onSubmitForm,
    } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <h3 className=" text-center text-white text-uppercase font-weight-bold">
          Search for a PokeStop
        </h3>
        <p className="mb-4 text-center text-white">
          Search for a PokeStop either by its' name or by its rating. Enter your
          search query or rating and click the adjacent search button.
        </p>

        <form
          className="input-group mb-3"
          onSubmit={() => {
            return submitForm(event);
          }}
        >
          <div className="input-group-prepend">
            <span className="input-group-text">Search by Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your query"
            aria-label="Recipient's username"
          />
          <div className="input-group-append">
            <button className="btn btn-default" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        <form
          className="input-group mb-3"
          onSubmit={() => {
            return submitForm(event);
          }}
        >
          <div className="input-group-prepend">
            <span className="input-group-text">Search by Rating</span>
          </div>
          <select className="custom-select" id="inputGroupSelect04">
            <option defaultValue>Choose...</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-default" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        <div className="input-group mb-3">
          <button
            className="btn btn-light mx-auto"
            onClick={() => {
              getLocation();
            }}
          >
            Search Near Your Location <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="input-group mb-3">
          <h6 id="latlong" className="mx-auto text-white">
            Found you at:{' '}
          </h6>
        </div>
      </div>
    );
  }
}

PokestopPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
