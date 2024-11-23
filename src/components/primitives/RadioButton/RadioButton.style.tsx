import { StyleSheet } from "react-native";
import theme from '../../../theme/index'

const dot = {
    height: 32,
    width: 32,
    borderWidth: 2,
    borderRadius: 20,
}

export default StyleSheet.create({
    containerDot: {
        height: 60
    },
    wrapperStyle: {
        height: 60
    },
    containerUnchecked: {
        ...dot,
    },
    containerChecked: {
        ...dot,
        borderColor: theme.COLORS.BRAND_MID,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentDotChecked: {
        height: 22,
        width: 22,
        borderRadius: 20,
        backgroundColor: theme.COLORS.BRAND_MID,
    },
    text:{
        fontSize: theme.FONT_SIZE.XL,
        fontFamily: theme.FONT_FAMILY.BOLD,
    }
});