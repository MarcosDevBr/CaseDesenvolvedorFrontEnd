import { IImageViewProps } from './Image.model';
import { View, Text } from 'react-native';
import Style from './Image.style';

import FastImage from 'react-native-fast-image';
import theme from '../../../theme/index'

import { NoImage } from '../../../assets/index'

export default function ImageView(props: IImageViewProps) {
    return (
        <View style={[Style.container, props.containerStyle, !props.source && !!props.textNoImage && { backgroundColor: theme.COLORS.PLACEHOLDER }]}>
        {!props.source && !!props.textNoImage ? (
            <Text style={[Style.text, props.textNoImageStyle]}>
                {props.textNoImage}
            </Text>
        ) : (
            <FastImage
                source={props.source ?? NoImage}
                resizeMode={props.resizeMode ?? "contain"}
                style={[Style.image, props.imageStyle]}
            />
        )}
    </View>
    );
}
