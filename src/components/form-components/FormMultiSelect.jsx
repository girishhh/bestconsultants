import React from 'react';
import {
  FormControl,
  Checkbox,
  ListItemText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Controller } from 'react-hook-form';

export function FormMultiInputDropdown({
  name,
  control,
  label,
  optionList,
  ...others
}) {
  return (
    <FormControl size="small" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={onChange}
            value={value || []}
            label={label}
            multiple
            renderValue={(selected) => selected.join(', ')}
            {...others}
          >
            {optionList.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={value?.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
}
