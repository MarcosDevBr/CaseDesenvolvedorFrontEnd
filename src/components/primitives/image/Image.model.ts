import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from "react-native";
import { ImageStyle, ResizeMode } from "react-native-fast-image";

export interface IImageProps {
    containerStyle?: StyleProp<ViewStyle>;
    source?: ImageSourcePropType | null;
    textNoImage?: string | null;
    textNoImageStyle?: StyleProp<TextStyle>;
    resizeMode?: ResizeMode;
    imageStyle?: StyleProp<ImageStyle>;
}

export interface IImageViewProps extends IImageProps { }
