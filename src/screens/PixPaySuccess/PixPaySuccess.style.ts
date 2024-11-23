import { StyleSheet } from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    height: 136,
    width: '100%',
    position: 'relative',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 62
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '80%',
    flexWrap: 'wrap',
    fontFamily: theme.FONT_FAMILY.BOLD
  },
  headerIcon: {
      position: 'absolute',
      top: 8,
      right: 8
  },
  iconContainer: {
    height: 96,
    width:  96,
    borderRadius: 48,
    backgroundColor: theme.COLORS.BRAND_MID,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  recipientLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: theme.FONT_FAMILY.REGULAR
  },
  recipient: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: '#1F2B2A'
  },
  detailsContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  detail: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    marginBottom: 11,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
