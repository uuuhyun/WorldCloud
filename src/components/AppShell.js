import React from 'react';
import { withStyles } from '@mui/styles'; // ✅ 변경됨
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 'auto',
  },
};

class AppShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              className={classes.menuButton}
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={this.state.toggle} onClose={this.handleDrawerToggle}>
          <MenuItem onClick={this.handleDrawerToggle}>Home</MenuItem>
          <MenuItem onClick={this.handleDrawerToggle}>Home2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(AppShell);