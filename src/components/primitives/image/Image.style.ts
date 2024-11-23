import { StyleSheet } from "react-native";

import theme from '../../../theme/index'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.RADIUS.s,
    },
    text: {
        fontSize: 40,
        color: theme.COLORS.BLACK,
        alignSelf: 'center',
    },
    image: {
        height: 110,
        width: 110,
    },
});
