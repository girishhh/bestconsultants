import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { setToast } from '../features/toast/toastSlice';

function Toast() {
  const dispatch = useDispatch();
  const { open, autoHideDuration, message, severity } = useSelector(
    (state) => state.toast,
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(
      setToast({
        open: false,
        autoHideDuration: 5000,
      }),
    );
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          elevation={6}
          onClose={handleClose}
          severity={severity}
          sx={{ whiteSpace: 'pre-line', borderColor: 'severity' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Toast;
