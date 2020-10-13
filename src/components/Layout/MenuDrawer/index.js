import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, Grid, IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const MenuDrawer = ({ toggleMenu ,menuOpen }) => {
  return (
    <div
      onClick={() => toggleMenu(false)}
      onKeyDown={() => toggleMenu(false)}
    >
      <Drawer
        anchor='right'
        open={menuOpen}
        onClose={() => toggleMenu(false)}
      >
        <Grid container direction='column'>
          <Grid item direction='row'>
            <IconButton>
              <AccountCircle />
            </IconButton>
            <p>Login</p>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  )
}

MenuDrawer.propTypes = {

}

export default MenuDrawer
