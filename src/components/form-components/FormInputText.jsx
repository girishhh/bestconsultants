import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export function FormInputText({ name, control, label, ...others }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          variant="outlined"
          fullWidth
          {...others}
        />
      )}
    />
  );
}
