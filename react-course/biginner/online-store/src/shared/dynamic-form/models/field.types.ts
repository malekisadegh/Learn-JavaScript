import { info } from 'console';
import FormIcon from '../helpers/form.icon';
import { ValidationShemaTypes } from './validation.types';

export const FIELD_TYPES = [
  'text',
  'select',
  'textarea',
  'radio',
  'checkbox',
  'upload',
  'jalaliDatePicker',
  'button',
];

export enum FieldTypes {
  text = 'text',
  select = 'select',
  textarea = 'textarea',
  radio = 'radio',
  checkbox = 'checkbox',
  upload = 'upload',
  jalaliDatePicker = 'jalaliDatePicker',
  button = 'button',
}

export enum FieldPositions {
  header = 'header',
  footer = 'footer',
  body = 'body',
}

export class FormField {
  id: string;
  label: string;
  placeholder?: string;
  type: FieldTypes;
  validationType: ValidationShemaTypes;
  value?: any;
  validations?: any[];
  options?: any[];
  position?: FieldPositions;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  callback?: Function;
  onChange?: Function;
  constructor(options?: FormField) {
    this.id = options.id;
    this.label = options.label;
    this.placeholder = options.placeholder;
    this.type = options.type;
    this.validationType = options.validationType;
    this.value = options.value || '';
    this.validations = options.validations;
    this.options = options.options;
    this.position = options.position;
    this.className = options.className;
    this.startIcon = FormIcon(options.startIcon);
    this.endIcon = FormIcon(options.endIcon);
    this.onChange = (e) => options.onChange(e);
    this.callback = (e) => options.callback(e);
  }
}
