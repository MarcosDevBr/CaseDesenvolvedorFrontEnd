import Toast from 'react-native-toast-message';

export interface IToastParams {
    position?: 'top' | 'bottom',
    type: 'success' | 'error' | 'info',
    text1: string,
    text2?: string,
    visibilityTime?: number,
    autoHide?: boolean,
    topOffset?: number,
    bottomOffset?: number,
    onShow?: () => void,
    onHide?: () => void,
    onPress?: () => void,
};

export default class ToastModule {

    public show(props: IToastParams) {
        Toast.show(props);
    }

    public hide() {
        Toast.hide();
    }
}