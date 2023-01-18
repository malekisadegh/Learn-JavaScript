import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from './TextField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import RadioButtonField from './RadioButtonField';
import CheckboxField from './CheckboxField';
import UploadField from './UploadField';
import JalaliDatePicker from './jalaliDatePicker';
import MuiButton from './button';

const variant = 'outlined';
const size = 'small';

const fieldMap = {
  text: MuiTextField,
  select: SelectField,
  textarea: TextAreaField,
  radio: RadioButtonField,
  checkbox: CheckboxField,
  upload: UploadField,
  jalaliDatePicker: JalaliDatePicker,
  button: MuiButton,
};

function Field({ fields, formikProps, config }) {
  const {
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = formikProps;

  return fields.map((item, index) => {
    const Component = fieldMap[item.type];
    let error = errors.hasOwnProperty(item.id) && errors[item.id];
    if (!item.type) {
      return null;
    }
    return (
      <div className="p-4" key={index}>
        <Component
          key={index}
          label={item.label}
          name={item.id}
          placeholder={item.placeholder}
          value={values[item.id]}
          options={item.options}
          touched={touched}
          error={error}
          handleBlur={handleBlur}
          onChange={item.onChange || handleChange}
          setFieldValue={setFieldValue}
          variant={variant}
          size={size}
          className={item.className}
          handleSubmit={handleSubmit}
          startIcon={item.startIcon}
          endIcon={item.endIcon}
        />
      </div>
    );
  });
}

Field.propTypes = {
  fields: PropTypes.array.isRequired,
  formikProps: PropTypes.object.isRequired,
};

export default Field;
