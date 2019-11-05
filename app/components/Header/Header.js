import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LearnIcon from './images/learn-inactive2.svg';
import DiscussIcon from './images/discuss-inactive.svg';
import ShopIcon from './images/shop-inactive2.svg';
import MoreIcon from './images/more-inactive.svg';
import './style.scss';

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1 className="header__title">PokeStop Locator</h1>
        </Link>

        <nav className="navbar navbar-expand-md navbar-light">
          <button
            className="navbar-toggler mx-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.location.pathname == '/search' || this.props.location.pathname == '/' ? 'active' : ''
                  }`}
                  to="/search"
                >
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.location.pathname == '/results' ? 'active' : ''
                  }`}
                  to="/results"
                >
                  Results
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.location.pathname == '/submission'
                      ? 'active'
                      : ''
                  }`}
                  to="/submission"
                >
                  Submission
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.location.pathname == '/registration'
                      ? 'active'
                      : ''
                  }`}
                  to="/registration"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
