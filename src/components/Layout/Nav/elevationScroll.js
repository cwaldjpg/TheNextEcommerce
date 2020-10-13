import React from 'react'
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const elevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

elevationScroll.propTypes = {
  children: PropTypes.element.isRequired
}

export default elevationScroll
