import React from 'react';
import PropTypes from 'prop-types';
import { FormHelperText, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

function TextAreaField(props) {
  const hasError = props.error && props.touched[props.name];
  const [t] = useTranslation(['common']);

  return (
    <>
      <div className="label">{props.label}</div>
      <TextField
        fullWidth
        multiline
        maxRows={6}
        error={hasError}
        id={props.label}
        type={props.type}
        name={props.name}
        label={props.label}
        defaultValue={props.value}
        helperText={props.placeholder}
        onBlur={props.handleBlur}
        onChange={props.onChange}
        variant={props.variant}
        size={props.size}
      />
      {hasError && (
        <FormHelperText className="text-error">{t(props.error)}</FormHelperText>
      )}
    </>
  );
}

TextAreaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

TextAreaField.defaultProps = {
  label: '',
  name: '',
  placeholder: '',
  value: '',
  error: '',
  onChange: () => {},
};

export default TextAreaField;
