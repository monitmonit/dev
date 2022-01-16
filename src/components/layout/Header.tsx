import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Link href="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#fff' }}>
            Monit
          </Typography>
          </Link>
            <Link href="/Korea">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#fff' }}>
            KOREA
          </Typography>
            </Link>
            <Link href="/Mongolia">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#fff' }}>
            MONGOLIA
          </Typography>
            </Link>
            <Link href="/Taiwan">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#fff'}}>
            TAIWAN
          </Typography>
          </Link>
          <Link href="/China">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#fff' }}>
            CHINA
          </Typography>
            </Link>
          <Link href="/Japan">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#fff'}}>
            JAPAN
          </Typography>
            </Link>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}