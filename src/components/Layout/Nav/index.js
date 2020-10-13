import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@material-ui/core'
import { Search, Menu, AccountCircle, LocalMall } from '@material-ui/icons'

import MenuDrawer from '@components/Layout/MenuDrawer'
import useStyles from './navbar.styles'
import ElevationScroll from './elevationScroll'
const NavBar = props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const classes = useStyles()
  return (
    <div className={classes.grow}>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appBarRoot}>
          <Toolbar className={classes.toolbarRoot}>
            <Typography className={classes.logo}>
              THE NEXT ECOMMENCE
            </Typography>
            <div className={classes.searchBarRoot}>
              <InputBase 
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <div className={classes.searchIcon}>
                <Search />
              </div>
            </div>
            <div>
              <IconButton>
                <AccountCircle />
              </IconButton>
              <IconButton>
                <LocalMall />
              </IconButton>
              <IconButton onClick={() => setMenuOpen(true)}>
                <Menu />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.offset}></div>
      <MenuDrawer toggleMenu={setMenuOpen} menuOpen={menuOpen}/>
    </div>
  )
}

NavBar.propTypes = {

}

export default NavBar
