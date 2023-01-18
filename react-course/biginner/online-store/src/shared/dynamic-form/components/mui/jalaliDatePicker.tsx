import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FormHelperText } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function JalaliDatePicker(props) {
  const [value, setValue] = React.useState<Date | null>(null);
  const hasError = props.error && props.touched[props.name];
  const [t] = useTranslation(['common']);

  const handleChangeDate = (value) => {
    setValue(value);
    props.setFieldValue(props.name, value);
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterJalali}>
        <DatePicker
          mask="____/__/__"
          value={!props.value ? '' : props.value}
          onChange={handleChangeDate}
          renderInput={(params) => (
            <TextField
              name={props.name}
              onChange={props.onChange}
              helperText={''}
              {...params}
              size={props.size}
            />
          )}
        />
        {hasError && (
          <FormHelperText className="error">{t(props.error)}</FormHelperText>
        )}
      </LocalizationProvider>
    </div>
  );
}

JalaliDatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};
