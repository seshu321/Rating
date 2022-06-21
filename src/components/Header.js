import React from 'react'
import PropTypes from 'prop-types';


function Header({title}) {
  return (
    <header>
    </header>
  )
}
Header.defaultProps={
title:"seshu"
}
Header.propTypes = {
    title: PropTypes.string  };
  


export default Header