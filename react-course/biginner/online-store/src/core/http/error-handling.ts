import { AnyArray } from 'immer/dist/internal';
import { useTranslation } from 'react-i18next';
import { store } from '../../store';
import { notificationActions } from '../../store/notification.slice';
import i18n from '../../i18n';

export const errorHandling = (error: any) => {
  const t = i18n.t;

  const statusCode = error.response?.status || '';
  const message = error.message;
  const errorCode = error.response?.data?.code || '';
  const userFriendlyMessage =
    error.response?.data?.description || t('un.expect.error');
  store.dispatch(notificationActions.error({ message: userFriendlyMessage }));
};
