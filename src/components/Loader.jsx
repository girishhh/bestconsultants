import { Grid, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <CircularProgress size="6rem" disableShrink />
    </Grid>
  );
}

export default Loader;
