import { isEmpty } from "../utils";
import jmoment from 'jalali-moment';

export const DateToPersian = (value: Date) => {
  if (!isEmpty(value)) {
    value = typeof value === 'string' ? new Date(value) : value;
    const m = jmoment(value);
    m.locale('fa');
    if (m.isValid()) {
      return m.format('jYYYY/jMM/jDD');
    } else {
      return '';
    }
  } else {
    return '';
  }
};