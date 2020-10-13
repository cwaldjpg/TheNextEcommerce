import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './Nav'

const PageLayout = ({children}) => {
  return (
    <div>
      {/* <Header title={pageTitle} description={pageDescription} image={image} themeColor={colorValue} /> */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <NavBar />
          {children}
        </div>
        <div style={{ flexShrink: 0 }}>
          {/* <Footer /> */}
        </div>
      </div> 
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default PageLayout
