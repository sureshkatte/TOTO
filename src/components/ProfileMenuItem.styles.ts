import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  row: {
    minHeight: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
    gap: 16,
  },
  pressed: {
    opacity: 0.82,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '600',
  },
  label: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '600',
  },
  chevron: {
    color: colors.textSecondary,
    fontSize: 24,
    fontWeight: '600',
  },
  badge: {
    borderRadius: 10,
    backgroundColor: colors.brand,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: colors.darkText,
    fontSize: 12,
    fontWeight: '800',
  },
  dangerText: {
    color: '#F06A62',
  },
});
