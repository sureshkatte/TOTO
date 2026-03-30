import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: colors.background,
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  contentWrap: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  topSection: {
    gap: 28,
  },
  headerBlock: {
    gap: 8,
    marginTop: 10,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 17,
    fontWeight: '500',
  },
  validationText: {
    minHeight: 20,
    color: colors.brand,
    fontSize: 14,
    fontWeight: '600',
    marginTop: -12,
    textAlign: 'center',
  },
  resendText: {
    color: colors.textSecondary,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  resendTime: {
    color: colors.brand,
    fontWeight: '700',
  },
});
