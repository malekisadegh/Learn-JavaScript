import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormHelperText, Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';

function RadioButtonField(props) {
  const hasError = props.error && props.touched[props.name];
  const [t] = useTranslation(['common']);

  return (
    <>
      <div className="label">{props.label}</div>
      {props.options.map((opt, index) => {
        return (
          <FormControlLabel
            value={opt}
            key={index}
            control={
              <Radio
                key={index}
                value={opt}
                name={props.name}
                checked={opt === props.value}
                onBlur={props.handleBlur}
                onChange={props.onChange}
                size={props.size}
              />
            }
            label={opt}
          />
        );
      })}
      {hasError && <FormHelperText>{t(props.error)}</FormHelperText>}
    </>
  );
}

RadioButtonField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtonField;
