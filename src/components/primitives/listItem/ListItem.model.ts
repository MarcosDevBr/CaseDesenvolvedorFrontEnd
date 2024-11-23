import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import { ImageStyle } from "react-native-fast-image";

export interface ISideImageView {
    source?: ImageSourcePropType | null,
    textNoImage?: string | null,
    avatarContainerStyle?: StyleProp<ViewStyle>
    avatarImageStyle?: StyleProp<ImageStyle>
}

export interface ISideImage extends ISideImageView {
    type: "Image" | "Component",
}

export interface ISideComponentView {
    component: JSX.Element | null,
}

export interface ISideComponent extends ISideComponentView {
    type: "Image" | "Component",
}

export interface ICardType {
    type: "visa" | "mastercard" | "accountBalance"
}

export interface IListItemProps {
    title: string,
    subTitle?: string,
    footerTitle?: string,
    titleNumberOfLines?: number,
    subTitleNumberOfLines?: number,
    readingDoneCheck?: boolean,
    wrapperStyle?: any,
    containerStyle?: any,
    containerLeftStyle?: any,
    containerContentStyle?: any,
    textTitleStyle?: any,
    textSubTitleStyle?: any,
    containerRightStyle?: any,
    disabled?: boolean,
    onPress?: () => void,
    onPressLeftItem?: () => void,
    onPressRightItem?: () => void
    leftItem?: ISideImage | ISideComponent,
    rightItem?: ISideImage | ISideComponent,
    paymentMethod?:  number 
}

export interface IListItemViewProps extends IListItemProps {
    getSide: (side: "leftItem" | "rightItem") => JSX.Element | null,
    getCurrentCard:  (paymentMethod?:  number) => JSX.Element | null,
}
