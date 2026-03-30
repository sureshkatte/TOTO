import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 14,
  },
  locationStack: {
    borderRadius: 26,
    backgroundColor: '#131313',
    padding: 14,
    gap: 10,
  },
  bottomSheet: {
    marginTop: 'auto',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 10,
    gap: 18,
  },
  handle: {
    alignSelf: 'center',
    width: 58,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#414141',
  },
  sheetTitle: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '800',
  },
  rideList: {
    gap: 14,
  },
});
