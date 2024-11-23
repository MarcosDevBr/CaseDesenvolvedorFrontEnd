import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BRAND_MID
  },
  loadingText: {
    fontSize: 30.67,
    color: theme.COLORS.BRAND_LIGHT,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  circle: {
    position: 'relative',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 8,  
    height: 15, 
    backgroundColor: '#A4E9E0',  
    borderRadius: 6,  
    position: 'absolute',
  },
});