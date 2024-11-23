import { ICardType, IListItemProps, ISideComponent, ISideImage } from "./ListItem.model";
import ListItemView from "./ListItem.view";
import Style from './ListItem.style';
import Image from "../../primitives/image/Image";
import VisaIcon from "../../../assets/svgs/VisaIcon";
import MastercardIcon from "../../../assets/svgs/MastercardIcon";
import { enumCardBrand  } from "../../../enums/enumPaymentMethod";

export default function ListItem(props: IListItemProps) {
    
    const getSide = (side: 'leftItem' | 'rightItem') => {
        const item = props[side];
        if (!item) return null;

        switch (item.type) {
            case 'Image':
                const sideImage = item as ISideImage;

                return (
                    <Image
                        source={sideImage.source}
                        textNoImage={sideImage.textNoImage}
                        containerStyle={[Style.imageStyle, sideImage.avatarContainerStyle]}
                        imageStyle={[Style.imageStyle, sideImage.avatarImageStyle]}
                        textNoImageStyle={Style.textNoImageStyle}
                        resizeMode="cover"
                    />
                );
            case 'Component':
                const sideComponent = item as ISideComponent;

                return sideComponent.component;
            default:
                return null;
        }
    }

    const getCurrentCard = () => {
        const item = props.paymentMethod;

        if (!item) return null;

       
        switch (item) {
            case enumCardBrand .VISA:

                return (
                   <VisaIcon />
                );
            case  enumCardBrand .MASTERCARD:
                return (
                    <MastercardIcon/>
                 );
                 
            default:
                return null;
        }
    }


    return (
        <ListItemView
            wrapperStyle={props.wrapperStyle}
            onPress={props.onPress}
            disabled={props.disabled}
            containerStyle={props.containerStyle}
            leftItem={props.leftItem}
            getSide={getSide}
            getCurrentCard={getCurrentCard}
            containerLeftStyle={props.containerLeftStyle}
            onPressLeftItem={props.onPressLeftItem}
            containerContentStyle={props.containerContentStyle}
            titleNumberOfLines={props.titleNumberOfLines}
            textTitleStyle={props.textTitleStyle}
            title={props.title}
            subTitle={props.subTitle}
            subTitleNumberOfLines={props.subTitleNumberOfLines}
            textSubTitleStyle={props.textSubTitleStyle}
            footerTitle={props.footerTitle}
            rightItem={props.rightItem}
            containerRightStyle={props.containerRightStyle}
            onPressRightItem={props.onPressRightItem}
            readingDoneCheck={props.readingDoneCheck}
            paymentMethod={props.paymentMethod}
        />
    )
}
