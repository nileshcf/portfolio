import React from 'react';
import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-wrapper">
      <h1 className="legal-title gradient-text">Terms & Conditions</h1>
      <p className="legal-description">
        By accessing this portfolio, you agree to comply with and be bound by the following terms and conditions of use,
        which govern our relationship with you in relation to this website.
      </p>
      <h2 className="legal-subheading">Usage</h2>
      <p className="legal-text">
        This website is for personal and educational use only. Unauthorized use or reproduction is strictly prohibited.
      </p>
      <h2 className="legal-subheading">Disclaimer</h2>
      <p className="legal-text">
        All content is provided "as is" with no warranties, expressed or implied. We reserve the right to update content
        without notice.
      </p>
    </div>
  );
};

export default Terms;