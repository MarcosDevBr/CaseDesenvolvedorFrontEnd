import { StyleSheet } from "react-native";
import theme from "../../theme";

const dot = {
  height: 32,
  width: 32,
  borderWidth: 2,
  borderRadius: 20,
}


export default (props?: any ) => StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND_COLOR,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  content: {
    height: 144,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  subtitle: {
    fontSize: 21.33,
    color: theme.COLORS.BLACK,
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontWeight: 'bold',
  },
  creditCardContainer: {
    width: '100%',
    height: 128,
    backgroundColor: theme.COLORS.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    paddingBottom: 96,
    overflow: 'hidden',
    borderRadius: theme.RADIUS.xsPlus
  },
  scrollContentContainer: {
    paddingBottom: 90, 
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 96,
    backgroundColor: theme.COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.RADIUS.xsPlus,
    zIndex: 20,

    // Sombra no iOS 
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: -3 },  
    shadowOpacity: 0.1, 
    shadowRadius: 6,  

    // Sombra no Android
    elevation: 5,  

  },
  footerCard: {
    height: 96,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.COLORS.WHITE,
    borderTopWidth: 1,
    borderTopColor: theme.COLORS.GRAY_100,
    borderRadius: theme.RADIUS.xsPlus,
  },
  footerText: {
    fontSize: 18.67,
    color: theme.COLORS.BLACK,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  footerValue: {
    fontSize: 24,
    color: theme.COLORS.BLACK,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  payButton: {
    backgroundColor: theme.COLORS.BRAND_MID,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 42.67,
    width: !props?.isModalVisible ? 100 : 138.67,
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabledButton: {
    backgroundColor: theme.COLORS.GRAY_300
  },
  payButtonText: {
    color: theme.COLORS.WHITE,
    fontSize: 18.67,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  bottomSheetContent: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.COLORS.WHITE,
  },
  bottomSheetTitle: {
    fontSize: 22,
    color: theme.COLORS.BLACK,
    fontWeight: 'bold',
    fontFamily: theme.FONT_FAMILY.REGULAR
  },
  bottomSheetSubTitle: {
    fontSize: 16,
    marginVertical: 10,
    color: theme.COLORS.BLACK,
    fontFamily: theme.FONT_FAMILY.REGULAR
  },
  bottomSheetScrollContainer: {
    marginTop: 20,
    maxHeight: 500,
  },
  bottomSheetScrollContent: {
    paddingBottom: 40,
  },
  installmentOption: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderRadius: theme.RADIUS.xsPlus,
    marginBottom: 10,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4,   
    elevation: 2, 
  },
  installmentText: {
    fontSize: 18,
    color: theme.COLORS.BRAND_MID,
    marginLeft: 20,
    fontFamily: theme.FONT_FAMILY.BOLD
  },

  bottomSheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 20,
  },

  closeButton: {
    padding: 10,
  },

  bottomSheetContainer: {
    flex: 1, 
    alignItems: 'center', 
    marginHorizontal: 20,
    overflow: 'hidden',
    zIndex: 10
  },
  backdropComponent: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
});
