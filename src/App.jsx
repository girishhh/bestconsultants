import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Suspense, useEffect } from 'react';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/material';
import routes from './routes';
import Loader from './components/Loader';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#263f6a',
    },
    secondary: {
      main: '#424242',
    },
    error: {
      main: '#ef4a5f',
      contrastText: '#fff',
    },
    success: {
      main: '#45ba7f',
      contrastText: '#fff',
    },
    info: {
      main: '#68d8ff',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: grey[200],
    },
    grey: { main: '#bdbdbd' },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

function App() {
  const router = createBrowserRouter(routes);
  let content;

  content = <RouterProvider router={router} />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="drop_in_container"></div>
      <Suspense fallback={<Loader />}>{content}</Suspense>
    </ThemeProvider>
  );
}

export default App;