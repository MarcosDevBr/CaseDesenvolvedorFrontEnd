import { StyleProp, ViewStyle } from "react-native";

export interface IActionButtonView {
    type: 'left' | 'close';
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>
}

export interface IIActionButtonViewProps extends  IActionButtonView {}
