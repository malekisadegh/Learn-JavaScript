import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';

function CheckboxField(props) {
  const hasError = props.error && props.touched[props.name];
  const [checkedItems, setCheckedItems] = useState(new Map());

  const [t] = useTranslation(['common']);

  const handleCheckItem = (e) => {
    const { name, value } = e.target;
    let items = new Map(checkedItems);
    if (checkedItems.has(name)) {
      items.delete(name);
    } else {
      items.set(name, value);
    }
    setCheckedItems(items);
    props.setFieldValue(props.name, Array.from(items.values()).toString());
  };

  return (
    <>
      {props.options.map((opt, index) => {
        return (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                key={index + '-' + opt}
                name={opt.name}
                value={opt.value}
                checked={!!checkedItems.get(opt.name)}
                onChange={handleCheckItem}
                size={props.size}
              />
            }
            label={opt.name}
          />
        );
      })}
      {hasError && <FormHelperText>{t(props.error)}</FormHelperText>}
    </>
  );
}

CheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default CheckboxField;
