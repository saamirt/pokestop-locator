import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CloseIcon from './images/x.svg';
import './style.scss';

const Card = ({ children }) => {
  const [isDismissed, setDismissed] = useState(false);
  console.log(isDismissed);
  if (!isDismissed) {
    return (
      <div className="card-container">
        <div className="card">{children}</div>
        <div
          className="card-container__button"
          onClick={() => setDismissed(true)}
        >
          <img src={CloseIcon} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
