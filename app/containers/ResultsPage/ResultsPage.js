/*
 *
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './style.scss';

import Image1 from './../../images/pokestops/pokestop1.png';
import Image2 from './../../images/pokestops/pokestop2.png';
import Image3 from './../../images/pokestops/pokestop3.png';
import Image4 from './../../images/pokestops/pokestop4.png';
import Image5 from './../../images/pokestops/pokestop5.png';
import Image6 from './../../images/pokestops/pokestop6.png';
import Image7 from './../../images/pokestops/pokestop7.png';
import Image8 from './../../images/pokestops/pokestop8.png';
import Image9 from './../../images/pokestops/pokestop9.png';

class ResultsPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  static defaultProps = {
    center: { lat: 43.260949, lng: -79.913004 },
    zoom: 16,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false,
      pokestops: [
        {
          title: 'University at Life Sciences',
          loc: { lat: 43.260891, lng: -79.918625 },
          img: Image1,
          desc:
            'Bus stop outside the Life Sciences building towards the John Hodgins Engineering building.',
        },
        {
          title: 'Health Sciences Entrance',
          loc: { lat: 43.260274, lng: -79.918101 },
          img: Image2,
          desc:
            'Entrance to Health Sciences building facing towards Life Sciences building.',
        },
        {
          title: 'Willy Dog',
          loc: { lat: 43.262887, lng: -79.918727 },
          img: Image3,
          desc:
            'Hot Dog stand outside McMaster University Student Centre and Mills Memorial Library.',
        },
        {
          title: 'East Meets West Bistro',
          loc: { lat: 43.262418, lng: -79.922495 },
          img: Image4,
          desc:
            'International restaurant-style dining featuring multicultural cuisine inside the Mary Keyes building.',
        },
        {
          title: 'Arts Quad',
          loc: { lat: 43.263992, lng: -79.917618 },
          img: Image5,
          desc:
            'Paved area located between the McMaster University Student Centre, Kenneth Taylor Hall, and Togo Salmon Hall.',
        },
        {
          title: 'Dalewood Recreation Centre',
          loc: { lat: 43.258357, lng: -79.912333 },
          img: Image6,
          desc:
            'Community recreation centre located near the Westdale area on Main st.',
        },
        {
          title: 'Dough Box Wood Fired Pizza',
          loc: { lat: 43.257474, lng: -79.924041 },
          img: Image7,
          desc:
            'Hot Dog stand outside McMaster University Student Centre and Mills Memorial Library.',
        },
        {
          title: 'Lazeez Shawarma',
          loc: { lat: 43.261548, lng: -79.906421 },
          img: Image8,
          desc:
            'Middle Eastern fast-food restaurant located in the Westdale area.',
        },
        {
          title: 'OneZo Tapioca',
          loc: { lat: 43.261359, lng: -79.906909 },
          img: Image9,
          desc:
            'Bubble Tea restaurant in the Westdale area known for making their own tapioca pearls.',
        },
      ],
    };

    this.state.pokestops.sort((a, b) => {
      return (
        this.getDistance(this.props.center, a.loc) -
        this.getDistance(this.props.center, b.loc)
      );
    });
  }

  onMarkerClick = (props, marker) => {
    console.log(props);
    return this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });
  };

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };

  getDistance(loc1, loc2) {
    return this.props.google.maps.geometry.spherical.computeDistanceBetween(
      new this.props.google.maps.LatLng(loc1),
      new this.props.google.maps.LatLng(loc2),
    );
  }

  formatDistance(dist) {
    if (dist > 1000) {
      return `${Math.round(dist / 10) / 100}km`;
    } else {
      return `${Math.round(dist)}m`;
    }
  }

  render() {
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
          Search Results
        </h3>
        <p className="mb-4 text-center text-white">
          PokeStop Search results are displayed on a map and as tabular results
          below.
        </p>

        <div className="w-100 mb-4">
          <div className="card lg-4 shadow--sm">
            <div className="card map">
              <Map
                google={this.props.google}
                zoom={this.props.zoom}
                initialCenter={this.props.center}
                onClick={this.onMapClicked}
              >
                {this.state.pokestops.map((stop, index) => (
                  <Marker
                    key={`pokestop-marker-${index}`}
                    position={stop.loc}
                    onClick={this.onMarkerClick}
                    name={stop.title}
                    stop={stop}
                  />
                ))}
                <InfoWindow
                  marker={this.state.activeMarker}
                  onClose={this.onInfoWindowClose}
                  visible={this.state.showingInfoWindow}
                >
                  {this.state.selectedPlace.stop ? (
                    <div id="content" className="marker">
                      <div
                        id="bodyContent"
                        className="marker__content text-center"
                      >
                        <a href="#">
                          <h5>{this.state.selectedPlace.stop.title}</h5>
                        </a>
                        <p>{`${this.state.selectedPlace.stop.loc.lat}, ${this.state.selectedPlace.stop.loc.lng}`}</p>
                      </div>

                      <img
                        className="marker__img"
                        alt="PokeStop Image"
                        src={this.state.selectedPlace.stop.img}
                        data-holder-rendered="true"
                      />
                    </div>
                  ) : (
                    <div />
                  )}
                </InfoWindow>
              </Map>
            </div>
          </div>
        </div>

        <div className="row" id="search-cards">
          {this.state.pokestops.map((stop, index) => (
            <div
              key={`pokestop-card-${index}`}
              className="col-lg-4 d-flex align-items-stretch"
            >
              <a
                href="#"
                className="pokestop-card card card--clickable mb-4 shadow--sm"
              >
                <img
                  className="card-img-top img--search"
                  alt="PokeStop Image"
                  src={stop.img}
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title card-title--ellipsis">
                      {stop.title}
                    </h5>
                    <h6>
                      <span className="badge badge-light badge--gray">
                        {this.formatDistance(
                          this.getDistance(this.props.center, stop.loc),
                        )}
                      </span>
                    </h6>
                  </div>
                  <p className="card-text">{stop.desc}</p>
                </div>
                <div className="card-footer text-muted">Added 10 days ago</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ResultsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBnMuPBJUs37mOls7fPhrcF0E5MPe3l4Y',
})(ResultsPage);
