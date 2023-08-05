import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';

export default function ErrorPage({ message, type, status }) {
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      height="100%"
      margin={0}
      alignItems="center"
      spacing={4}
    >
      <Grid>
        <Stack direction="column" alignItems="center">
          {type === 'error' && (
            <>
              <ReportOutlinedIcon
                sx={{
                  color: '#E0E0E0',
                  fontSize: { xs: '5rem', sm: '10rem' },
                  textAlign: 'center',
                }}
              />
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
                {`Error ${status}`}
              </Typography>
            </>
          )}
          {type === 'underConstruction' && (
            <EngineeringIcon
              sx={{
                color: '#E0E0E0',
                fontSize: { xs: '5rem', sm: '10rem' },
                textAlign: 'center',
              }}
            />
          )}
          <Typography
            variant={type === 'error' ? 'h6' : 'h4'}
            color="secondary"
            sx={{
              color: '#424242',
              textAlign: 'center',
              textDecoration: 'none',
              fontWeight: 'fontWeightLight',
            }}
          >
            {message}
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
        </Stack>
      </Grid>
    </Grid>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  status: PropTypes.number,
};

ErrorPage.defaultProps = {
  message: 'Sorry, an unexpected error has occurred.',
  type: 'error',
  status: 500,
};
