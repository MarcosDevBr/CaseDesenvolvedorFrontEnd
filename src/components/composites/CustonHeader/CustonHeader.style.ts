import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    height: 144,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 28,
    backgroundColor: theme.COLORS.BACKGROUND_COLOR,
  },
  text: {
    fontSize: theme.FONT_SIZE.XXXL,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});
