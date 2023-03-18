import React from "react";
import PropTypes from 'prop-types';
import URLRegex from "../../utils/regex/url";

function Link({to, style, children}) {
  return (
    <a href={to} className={style}>
      {children}
    </a>
  );
}

Link.propTypes = {
    to: (props, propName) => URLRegex.test(props[propName]),
    style: PropTypes.string,
    children: PropTypes.node
};

export default Link;