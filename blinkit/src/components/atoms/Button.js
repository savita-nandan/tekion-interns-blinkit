import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ styles, children, onClick }) => {
  return (
    <button 
      className={styles}
      onClick={onClick} 
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Button;

