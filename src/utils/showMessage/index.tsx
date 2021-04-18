import Toast, { ToastPosition } from 'react-native-toast-message';

const showMessage = (message: string, type: string = 'info', position: ToastPosition = 'top') => {
  Toast.show({
    text1: message,
    type,
    position,
    visibilityTime: 3000,
    autoHide: true,
  });
};

export default showMessage;
