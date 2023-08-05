import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      height="80%"
      alignItems="center"
      spacing={4}
    >
      <Grid>
        <Stack direction="column">
          <Typography
            variant="h1"
            color="secondary"
            sx={{
              color: '#424242',
              textAlign: 'center',
              fontSize: { xs: '6rem', sm: '8rem' },
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            4<span style={{ color: '#6BD8FF' }}>0</span>4
          </Typography>
          <Typography
            variant="h2"
            color="secondary"
            sx={{
              color: '#424242',
              textAlign: 'center',
              fontSize: { xs: '1.5rem', sm: '2rem' },
              textDecoration: 'none',
              fontWeight: 'fontWeightLight',
            }}
          >
            PAGE NOT FOUND
          </Typography>
        </Stack>
      </Grid>
      <Grid>
        <Stack spacing={2} direction="row">
          <Button
            size="medium"
            variant="outlined"
            target="_blank"
            sx={{ width: '10rem' }}
          >
            CONTACT US
          </Button>
          <Button
            variant="contained"
            size="large"
            disableElevation
            component={Link}
            to="/"
            sx={{ width: '10rem' }}
          >
            GO HOME
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
