import React from 'react';
import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-wrapper">
      <h1 className="legal-title gradient-text">Privacy Policy</h1>
      <p className="legal-description">
        We value your privacy and are committed to protecting your personal data. This privacy policy outlines the types of
        information we collect and how we use, disclose, and protect that information.
      </p>
      <h2 className="legal-subheading">Information We Collect</h2>
      <p className="legal-text">
        We may collect personal information such as your name, email address, and any other details submitted via forms.
      </p>
      <h2 className="legal-subheading">How We Use Your Information</h2>
      <p className="legal-text">
        The information is used solely to improve our services, communicate updates, and ensure the best user experience.
      </p>
    </div>
  );
};

export default Privacy;