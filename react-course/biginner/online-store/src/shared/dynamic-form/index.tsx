import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import Fields from './components/mui';
import { createYupSchema } from './validation/yupSchemaCreator';
import { FieldTypes, FIELD_TYPES, VALIDATION_SHEMA_TYPES } from './models';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FieldPositions, FormField } from './models/field.types';

interface Props {
  fields: FormField[];
  cbSubmit: Function;
}

function DynamicFormGen(props: Props) {
  const { fields, cbSubmit } = props;
  const initialValues = {};
  const [t] = useTranslation(['login']);

  const config = {
    gridColumnWidth: 'grid grid-cols-1 lg:grid-cols-3 gap-3',
  };

  const _fields = fields.map((item: FormField) => new FormField(item));

  const headerButtons = _fields.filter(
    (field) =>
      field.type === FieldTypes.button &&
      field.position === FieldPositions.header
  );

  const footerButtons = _fields.filter(
    (field) =>
      field.type === FieldTypes.button &&
      field.position === FieldPositions.footer
  );
  const bodyFields = _fields.filter(
    (field) =>
      field.position !== FieldPositions.header &&
      field.position !== FieldPositions.footer
  );

  const yupSchema = _fields.reduce(createYupSchema, {});

  const validateSchema = yup.object().shape(yupSchema);

  const callSubmit = (e: any) => {
    cbSubmit(e);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={callSubmit}
    >
      {(formikProps) => (
        <form className="main-form" onSubmit={formikProps.handleSubmit}>
          <div className="main-form-header">
            <Fields
              fields={headerButtons}
              formikProps={formikProps}
              config={config}
            />
          </div>
          <div className="main-form-body-wrp">
            <div className={config.gridColumnWidth + 'main-form-body'}>
              <Fields
                fields={bodyFields}
                formikProps={formikProps}
                config={config}
              />
            </div>

            <div className="main-form-footer">
              <Fields
                fields={footerButtons}
                formikProps={formikProps}
                config={config}
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

DynamicFormGen.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.oneOf(FIELD_TYPES).isRequired,
      validationType: PropTypes.oneOf(VALIDATION_SHEMA_TYPES).isRequired,
      value: PropTypes.any,
      options: PropTypes.array,
      icon: PropTypes.string,
      startIcon: PropTypes.string,
      endIcon: PropTypes.string,
      validations: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          params: PropTypes.array.isRequired,
        })
      ),
    })
  ).isRequired,
  cbSubmit: PropTypes.func.isRequired,
};

export default DynamicFormGen;
