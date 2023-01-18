import { ValidationFieldTypes } from '../models';

export const ValidationsFactory = (validationTypes: ValidationFieldTypes[]) => {
  const _validations = new Array();
  validationTypes.map((v) => {
    _validations.push({ type: v, params: [getErrorMessage(v)] });
  });
  return _validations;
};

const getErrorMessage = (validationType: ValidationFieldTypes) => {
  return 'dform.' + validationType;
};
