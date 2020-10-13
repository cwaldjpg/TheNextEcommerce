import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import App from 'next/app'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'

import wrapper from '@providers/store'
import globalStyles from '@styles/global.styles'

const WrappedApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  return (
    <Component {...pageProps} />
  )
}

WrappedApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

WrappedApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)

  return {
    ...appProps
  }
}

export default wrapper.withRedux(WrappedApp)