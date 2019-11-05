/*
 *
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { geolocated } from 'react-geolocated';
import './style.scss';

class SearchPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  constructor(props) {
    super(props);
    this.state = { location: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getLocation() {
    console.log(this.props);
    if (
      this.props.isGeolocationAvailable &&
      this.props.isGeolocationEnabled &&
      this.props.coords
    ) {
      this.setState({
        location: {
          lat: this.props.coords.latitude,
          lng: this.props.coords.longitude,
        },
      });
    } else {
      console.log('Geolocation not working.');
    }
  }

  formatPosition(loc) {
    return loc
      ? `
      Latitude: ${(Math.round(loc.lat * 100000) / 100000).toFixed(5)}
      Longitude: ${(Math.round(loc.lng * 100000) / 100000).toFixed(5)}
      `
      : '';
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { loading, error, repos } = this.props;
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

        <form className="input-group mb-3" onSubmit={this.handleSubmit}>
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
            <Link to="/results">
              <button className="btn btn-default" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </Link>
          </div>
        </form>

        <form className="input-group mb-3" onSubmit={this.handleSubmit}>
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
            <Link to="/results">
              <button className="btn btn-default" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </Link>
          </div>
        </form>

        <div className="input-group mb-3">
          <Link className="mx-auto" to="/results">
            <button
              className="btn btn-light mx-auto"
              onClick={this.getLocation.bind(this)}
            >
              Search Near Your Location <i className="fas fa-search"></i>
            </button>
          </Link>
        </div>

        <div className="input-group mb-3">
          <h6 id="latlng" className="mx-auto text-white">
            {this.state.location
              ? `Latitude: ${(
                  Math.round(this.state.location.lat * 100000) / 100000
                ).toFixed(5)}
                Longitude: ${(
                  Math.round(this.state.location.lng * 100000) / 100000
                ).toFixed(5)}`
              : ''}
          </h6>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(SearchPage);
