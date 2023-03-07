import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ styles, src, alt }) => {
  return (
    <div>
      <img className = {styles} src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
   styles : PropTypes.string,
   src : PropTypes.node.isRequired,
   alt : PropTypes.string
}

export default Image;
