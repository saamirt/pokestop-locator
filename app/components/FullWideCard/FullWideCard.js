import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import PromptButton from 'components/PromptButton';

import defaultImage from './images/default.svg';
import './style.scss';

const FullWideCard = ({ imageSrc, title, desc, buttonLabel }) => {
  return (
    <Card>
      <img src={imageSrc || defaultImage} />
      <div className="card-content">
        <h3>{title || 'Title'}</h3>
        <p>{desc || 'Description'}</p>
      </div>
      <PromptButton className="card-right-button">
        {buttonLabel || 'Action'}
      </PromptButton>
    </Card>
  );
};

FullWideCard.propTypes = {
  children: PropTypes.any,
};

export default FullWideCard;
                   