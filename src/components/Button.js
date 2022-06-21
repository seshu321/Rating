import React from 'react'
import PropTypes from 'prop-types'
function Button({type,version,isDisabled,children}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
  )
}

Button.defaultProps={
    type:"text",
    version:"primary",

}
Button.propTypes={
    type:PropTypes.string,
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    isDisabled:PropTypes.bool

}
export default Button