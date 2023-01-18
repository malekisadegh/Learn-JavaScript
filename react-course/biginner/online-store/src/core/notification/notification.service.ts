import { toast } from 'react-toastify';
import notificationTypes from './notification.type';

export const notifier = async (
  type: string,
  message: string,
  delay?: number
) => {
  const _type = type?.toLowerCase() || notificationTypes.INFO;
  const _delay = delay ? delay : 1;

  const toastConfig = {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: _delay,
  };

  switch (_type) {
    case notificationTypes.SUCCESS:
      toast.success(message, toastConfig);
      break;
    case notificationTypes.INFO:
      toast.info(message, toastConfig);
      break;
    case notificationTypes.WARNING:
      toast.warning(message, toastConfig);
      break;
    case notificationTypes.ERROR:
      toast.error(message, toastConfig);
      break;
    default:
      toast.dark(message, toastConfig);
  }
};
