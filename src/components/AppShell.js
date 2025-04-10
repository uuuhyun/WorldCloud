import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // ✅ react-router-dom v6+용 import
import Link from '@mui/material/Link'; // ✅ MUI v5+용 import
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
        <div>
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
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/">                                
                            Home                            
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/texts">                                
                            Texts                        
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/words">                                
                            Words                        
                        </Link>
                    </MenuItem>
                </Drawer>
            </div>
            <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
                {React.cloneElement(this.props.children)}
            </div>
        </div>

    );
  }
}

export default withStyles(styles)(AppShell);