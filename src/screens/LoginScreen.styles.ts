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
    paddingTop: 34,
    paddingBottom: 24,
    backgroundColor: colors.background,
  },
  content: {
    gap: 18,
  },
  headerBlock: {
    gap: 8,
    marginBottom: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 18,
    fontWeight: '500',
  },
  validationText: {
    minHeight: 20,
    color: colors.brand,
    fontSize: 14,
    fontWeight: '600',
    marginTop: -6,
  },
  termsText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
});
