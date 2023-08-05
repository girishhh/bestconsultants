import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

export default function UnauthorizedPage() {
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      height="80%"
      alignItems="center"
    >
      <Grid>
        <ReportOutlinedIcon
          sx={{
            color: '#E0E0E0',
            fontSize: { xs: '5rem', sm: '10rem' },
          }}
        />
      </Grid>
      <Grid>
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            color: '#424242',
            fontSize: { xs: '1.5rem', sm: '2rem' },
            textDecoration: 'none',
            fontWeight: 'fontWeightLight',
          }}
        >
          UNAUTHORIZED
        </Typography>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          size="large"
          disableElevation
          component={Link}
          to="/"
          sx={{ width: '10rem', mt: '1rem' }}
        >
          GO HOME
        </Button>
      </Grid>
    </Grid>
  );
}
