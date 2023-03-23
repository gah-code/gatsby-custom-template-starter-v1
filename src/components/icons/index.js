import React from 'react';
import PropTypes from 'prop-types';

// import IconXing from './xing';
import IconLinkedIn from './linkedin';
// import IconMedium from './medium';
// import IconGitHub from './github';
// import IconBehance from './behance';
// import IconExternal from './external';
// import IconMail from './mail';

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  return <IconLinkedIn name={name} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icon;
