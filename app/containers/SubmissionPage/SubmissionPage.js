/*
 *
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { geolocated } from 'react-geolocated';
import './style.scss';

class SubmissionPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  constructor(props) {
    super(props);
    this.state = { form: { name: '', lat: '', lng: '', desc: '', pic: null } };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  getLocation() {
    if (
      this.props.isGeolocationAvailable &&
      this.props.isGeolocationEnabled &&
      this.props.coords
    ) {
      this.setState({
        form: {
          ...this.state.form,
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
        <div className="card mb-5">
          <div className="card-body">
            <h5 className="card-title text-center">Submit a New PokeStop</h5>
            <p className="card-text text-center">
              Complete this form to submit a new PokeStop.{' '}
            </p>

            <form>
              <div className="form-group">
                <label htmlFor="pokestop-name-input">PokeStop Name</label>
                <input
                  type="text"
                  pattern="^ *[^ ].*"
                  className="form-control"
                  id="pokestop-name-input"
                  placeholder="PokeStop Name"
                  name="name"
                  value={this.state.form.name}
                  onChange={this.handleInputChange.bind(this)}
                  required
                />
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="latitude-input">Latitude</label>
                  <input
                    type="text"
                    pattern="^-?\d+(.\d+)?$"
                    className="form-control"
                    id="latitude-input"
                    placeholder="Latitude"
                    name="lat"
                    value={this.state.form.lat}
                    onChange={this.handleInputChange.bind(this)}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="longitude-input">Longitude</label>
                  <input
                    type="text"
                    pattern="^-?\d+(.\d+)?$"
                    className="form-control"
                    id="longitude-input"
                    placeholder="Longitude"
                    name="lng"
                    value={this.state.form.lng}
                    onChange={this.handleInputChange.bind(this)}
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <button
                  className="btn btn-primary btn--red mx-auto d-flex"
                  onClick={this.getLocation.bind(this)}
                  type="button"
                >
                  Set to Current Location
                  <i className="ml-2 my-auto fas fa-search"></i>
                </button>
              </div>

              <div className="form-group">
                <label htmlFor="description-input">Description</label>
                <textarea
                  className="form-control"
                  id="description-input"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="picture-input">Upload a picture</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="picture-input"
                />
              </div>
              <button className="btn btn-primary btn--red" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SubmissionPage.propTypes = {
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
})(SubmissionPage);
