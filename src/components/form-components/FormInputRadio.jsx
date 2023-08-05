import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Controller } from 'react-hook-form';

export function FormInputRadio({ name, control, label, options }) {
  const generateRadioOptions = () =>
    options.map((option) => (
      <FormControlLabel
        value={option}
        label={option}
        control={<Radio />}
        key={option}
      />
    ));

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value }
        }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}
