// src/styles/theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const getTheme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: {
          main: mode === 'light' ? '#1976d2' : '#90caf9',
        },
        secondary: {
          main: mode === 'light' ? '#dc004e' : '#f48fb1',
        },
        background: {
          default: mode === 'light' ? '#f5f5f5' : '#121212',
          paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
        },
        text: {
          primary: mode === 'light' ? '#333333' : '#ffffff',
          secondary: mode === 'light' ? '#666666' : '#bbbbbb',
        },
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h3: {
          fontWeight: 700,
        },
        h5: {
          fontWeight: 600,
        },
        h6: {
          fontWeight: 500,
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              },
            },
          },
        },
        MuiSelect: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none',
              borderRadius: 8,
            },
          },
        },
      },
    })
  );

export default getTheme;