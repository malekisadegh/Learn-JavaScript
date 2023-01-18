import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Button, FormHelperText } from '@mui/material';

function MuiButton(props) {
  return (
    <>
      <Button
        fullWidth
        id={props.label}
        type={props.type}
        name={props.name}
        onError={props.onChange}
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        onClick={props.handleSubmit}
        className={props.className}
        startIcon={props.startIcon}
        endIcon={props.endtIcon}
      >
        {props.label}
      </Button>
    </>
  );
}

MuiButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  startIcon: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default MuiButton;
