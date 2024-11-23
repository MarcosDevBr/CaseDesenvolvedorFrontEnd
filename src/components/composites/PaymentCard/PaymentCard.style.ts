import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const Style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.COLORS.BACKGROUND_COLOR,
    maxHeight: 404,
    minHeight: 109.33
  },
  cardContainer: {
    height: 94.67,
    justifyContent: 'center',
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,

    // Sombra no iOS (mais suave e embaçada)
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },  
    shadowOpacity: 0.08, 
    shadowRadius: 10, 

    // Sombra no Android
    elevation: 3,  
  },

  paymentPlanCard: {
    height: 64,
    paddingHorizontal: 20,
    backgroundColor: theme.COLORS.WHITE, 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    width: '100%',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20, 
    height: 20, 
    marginRight: 10,
  },
  cardText: {
    fontSize: theme.FONT_SIZE.LG,
    color:  theme.COLORS.BRAND_MID,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  installmentDetailContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  installmentDetail: {
    height: 202.67,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  installmentDetailText: {
    fontSize: 18.67,
    color: theme.COLORS.BLACK,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  installmentDetailValueText: {
    fontSize: 18.67,
    color: theme.COLORS.BLACK,
    fontFamily: theme.FONT_FAMILY.BOLD,
  }
});

export default Style;
