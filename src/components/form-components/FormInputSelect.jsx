import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

const options = [
  {
    label: 'A',
    value: '1',
  },
  {
    label: 'B',
    value: '2',
  },
];

export function FormInputDropdown({ name, control, label, optionList, disable, ...others}) {
  return (
    <FormControl size="small" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value || ''} label={label} disabled={disable} {...others}>
            { optionList ? 
              optionList.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
            )) : 
            //  we need to remove below code later once all the dropdown values are called from API's   
            options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            ))
            }
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
}
