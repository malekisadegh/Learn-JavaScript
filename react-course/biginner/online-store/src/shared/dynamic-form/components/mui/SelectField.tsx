import React from 'react';
import PropTypes from 'prop-types';
import { FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { info } from 'console';
import { useTranslation } from 'react-i18next';

function SelectField(props) {
  const hasError = props.error && props.touched[props.name];
  const [t] = useTranslation(['common']);

  const handleOnChange = (e) => {
    props.setFieldValue(props.name, e.target.value);
    if (typeof props.onChange === 'function') {
      props.onChange(e);
    }
  };
  const handleOnBlur = (e) => {
    props.handleBlur(e);
  };

  return (
    <>
      <InputLabel id={props.label + 'label'}>{props.label}</InputLabel>
      <Select
        fullWidth
        error={hasError}
        labelId={props.label + 'label'}
        id={props.label}
        value={props.value || ''}
        label={props.label}
        name={props.name}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        variant={props.variant}
        size={props.size}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.options &&
          props.options.map((opt, index) => {
            return (
              <MenuItem key={index} value={opt}>
                {opt.key}
              </MenuItem>
            );
          })}
      </Select>
      {hasError && <FormHelperText>{t(props.error)}</FormHelperText>}
    </>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

SelectField.defaultValue = {
  options: [],
};

export default SelectField;
