import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from 'buffer';

export default class UserPreferenceModule {
    private static encode = (unencoded: any) => unencoded ? Buffer.from(unencoded).toString('base64') : unencoded;

    private static decode = (encoded: string) => encoded ? Buffer.from(encoded, 'base64').toString('utf8') : encoded;

    public static clearStorage = (): Promise<void> => AsyncStorage.clear();

    public static async getItem(tag: string): Promise<string | null> {
        const value = await AsyncStorage.getItem(tag);
    
        return value ? this.decode(value) : null;
    }

    public static async getObject<T>(tag: string): Promise<T> {
        const value = await this.getItem(tag);

        return !!value ? JSON.parse(value) : null;
    }

    public static setItem = (tag: string, item: string | null) => {
        if (item === '' || item === null) {
            this.removeItem(tag);
        } else {
            AsyncStorage.setItem(tag, this.encode(item));
        }
    }

    public static setObject = <T>(tag: string, obj: T) => {
        const item = !!obj ? this.encode(JSON.stringify(obj)) : null;

        return AsyncStorage.setItem(tag, item);
    }

    public static removeItem = (tag: string) => AsyncStorage.removeItem(tag).then(() => {
        //TODO :)
    });
}
