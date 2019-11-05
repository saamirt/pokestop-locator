import React from 'react';
import './style.scss';

const Footer = () => (
  <footer className="text-muted">
    <div id="buckle"></div>
    <div className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>
        Made by Syed Aamir Tahir - 400134432. This website was made for a CS
        4WW3 Assignment. Please ignore CSS validation errors pertaining to
        Bootstrap as they have explained their reasoning for why many CSS
        validators would believe some parts of their CSS to be invalid here
        https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#validators.
        Please note that these are not CSS validation errors in my CSS but are
        part of Bootstrap and are unavoidable.
      </p>
    </div>
  </footer>
);

export default Footer;
