import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  panel: {
    borderRadius: 24,
    backgroundColor: '#171717',
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 4,
  },
  rowPressed: {
    opacity: 0.75,
  },
  bullet: {
    color: colors.brand,
    fontSize: 20,
    lineHeight: 20,
  },
  label: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  emptyMessage: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
});
