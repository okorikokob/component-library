import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#252525',
    color: '#fff',
    padding: '10px 0', // Adjust padding as needed
    textAlign: 'center',
  },
};

const Footer = () => {
  return (
    <Box style={styles.footer}>
      <Typography variant="body2">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Vanlife
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
