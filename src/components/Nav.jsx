import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ModalPop from './ModalPop';
import { useState } from 'react';

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Abi Mail Box
          </Typography>
          <Button variant="contained"  color="success"   onClick={() => setOpenModal(true)}>Compose mail</Button>
          <ModalPop open={openModal} handleClose={() => setOpenModal(false)} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;