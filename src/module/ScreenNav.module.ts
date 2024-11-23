import { enableScreens } from 'react-native-screens';

export default class ScreenNavModule {

    public screenNavAnableScreen(shouldEnableScreens?: boolean): void {
        return enableScreens(shouldEnableScreens);
    }
}