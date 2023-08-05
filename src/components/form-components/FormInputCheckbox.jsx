import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { Controller } from 'react-hook-form';

export function FormInputCheckbox({ name, control, label }) {
  return (
    <FormControl component="fieldset">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }}) => (
          <FormControlLabel
            required
            onChange={onChange}
            control={<Checkbox checked={value} />}
            label={label}
            value={value}
          />
        )}
      />
    </FormControl>
  );
}
