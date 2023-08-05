import { Outlet, useNavigation } from 'react-router-dom';
import {
  Box,
  Container,
  Toolbar,
  LinearProgress,
} from '@mui/material';

import Header from './Header';
import Toast from './Toast';
import SideNav from './SideNav';

function RootLayout() {
  const navigation = useNavigation();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Toast />
      {/* <Header />       */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f5f5f5',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >        
        {navigation.state === 'loading' && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
        <Container
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: '#f5f5f5',
            overflow: 'hidden',
            p: 3,
          }}
          maxWidth="false"
          disableGutters
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default RootLayout;
