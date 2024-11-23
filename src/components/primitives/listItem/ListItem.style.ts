import { StyleSheet } from "react-native";
import theme from '../../../theme/index'

export default StyleSheet.create({
    imageStyle: {
        borderRadius: theme.RADIUS.xsPlus,
        height: 50,
        width: 50,
    },
    textNoImageStyle: {
        fontSize: theme.FONT_SIZE.LG
    },
    wrapper: {
        height: 80,
        flexDirection: 'column',
        backgroundColor: theme.COLORS.WHITE,
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerLeft: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    containerContent: {
        marginHorizontal: 25,
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    iconPlusTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginLeft: 10
    },
    textTitle: {
        fontSize: theme.FONT_SIZE.XL,
        color: theme.COLORS.BRAND_MID,
        fontFamily: theme.FONT_FAMILY.REGULAR
    },
    textSubTitle: {
        color: '#3B4443',
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR
    },
    containerRight: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
