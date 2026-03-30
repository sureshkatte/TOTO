import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#242424',
    paddingTop: 14,
    paddingBottom: 4,
    backgroundColor: colors.background,
  },
  tab: {
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    color: colors.textSecondary,
    fontSize: 24,
    fontWeight: '700',
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  selectedText: {
    color: colors.brand,
  },
});
