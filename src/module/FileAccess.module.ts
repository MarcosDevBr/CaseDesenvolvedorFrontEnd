import * as FileSystem from 'expo-file-system';

export type IMethods = "POST" | "GET" | "DELETE" | "PUT" | "post" | "get" | "delete" | "put";

export interface IHeader {
    [key: string]: string;
}

export default class FileAccessModule {

    static async fileAccessFs(): Promise<string> {
        return FileSystem.documentDirectory || '';
    }

    static fileAccessWrap(path: string): string {
        return path;
    }

    static async fileAccessFetch<B>(method: IMethods, url: string, body?: B | null, headers?: IHeader): Promise<Response> {
        try {
            const options: RequestInit = {
                method: method.toUpperCase(),
                headers: headers,
                body: body ? JSON.stringify(body) : undefined,
            };

            const response = await fetch(url, options);
            return response;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    static async readFile(filePath: string): Promise<string> {
        try {
            const fileUri = FileSystem.documentDirectory + filePath;
            const fileContents = await FileSystem.readAsStringAsync(fileUri);
            return fileContents;
        } catch (error) {
            console.error('File read error:', error);
            throw error;
        }
    }

    static async writeFile(filePath: string, content: string): Promise<void> {
        try {
            const fileUri = FileSystem.documentDirectory + filePath;
            await FileSystem.writeAsStringAsync(fileUri, content);
        } catch (error) {
            console.error('File write error:', error);
            throw error;
        }
    }

    static async deleteFile(filePath: string): Promise<void> {
        try {
            const fileUri = FileSystem.documentDirectory + filePath;
            await FileSystem.deleteAsync(fileUri);
        } catch (error) {
            console.error('File delete error:', error);
            throw error;
        }
    }
}
