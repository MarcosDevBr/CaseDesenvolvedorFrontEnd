import { View, Text, TouchableOpacity } from 'react-native';
import { IListItemViewProps } from './ListItem.model';
import Style from './ListItem.style';
import { enumCardBrand  } from '../../../enums/enumPaymentMethod';

export default function ListItemView(props: IListItemViewProps) {
    return (
        <TouchableOpacity
            style={[Style.wrapper, props.wrapperStyle]}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            <View style={[Style.container, props.containerStyle]}>
                <View style={Style.containerLeft}>
                    {!!props.leftItem && (
                        <TouchableOpacity
                            style={[props.containerLeftStyle]}
                            onPress={props.onPressLeftItem ?? props.onPress ?? undefined}
                            disabled={props.disabled}
                        >
                            {props.getSide('leftItem')}
                        </TouchableOpacity>
                    )}
                    <View style={[Style.containerContent, props.containerContentStyle]}>

                        <View style={Style.titleContainer}>

                            <View style={Style.iconPlusTextContainer}>

                                <View style={[props.paymentMethod != enumCardBrand .ACCOUNTBALANCE && { marginRight: 10 } ]}>
                                    {props.getCurrentCard(props.paymentMethod)}
                                </View>

                                <Text
                                    numberOfLines={props.titleNumberOfLines || 3}
                                    style={[Style.textTitle, props.textTitleStyle]}
                                >
                                    {props.title}
                                </Text>
                            </View>
                                
                            {props.subTitle && (
                                <Text
                                    numberOfLines={props.subTitleNumberOfLines || 1}
                                    style={[Style.textSubTitle, props.textSubTitleStyle]}
                                >
                                    {props.subTitle}
                                </Text>
                            )}
                        </View>
                       
                        {props.footerTitle && (
                            <Text
                                numberOfLines={props.subTitleNumberOfLines || 1}
                                style={[Style.textSubTitle, props.textSubTitleStyle]}
                            >
                                {props.footerTitle}
                            </Text>
                        )}
                    </View>
                </View>
                {!!props.rightItem && (
                    <TouchableOpacity
                        style={[Style.containerRight, props.containerRightStyle]}
                        onPress={props.onPressRightItem ?? props.onPress ?? undefined}
                        disabled={props.disabled}
                    >
                        {props.getSide('rightItem')}
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    )
}
