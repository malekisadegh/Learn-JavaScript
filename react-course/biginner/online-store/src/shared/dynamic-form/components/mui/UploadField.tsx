import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function UploadField(props) {
  const hasError = props.error && props.touched[props.name];
  const [t] = useTranslation(['common']);

  return (
    <>
      <div className="label">{props.label}</div>
      <input
        type="file"
        name={props.name}
        value={props.value}
        onBlur={props.handleBlur}
        onChange={props.onChange}
      />

      {/* <Button variant="contained" component="label">
        {props.label}
        <input
          type="file"
          hidden
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </Button> */}

      {hasError && <div className="error">{t(props.error)}</div>}
    </>
  );
}

UploadField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

UploadField.defaultValue = {};

export default UploadField;
