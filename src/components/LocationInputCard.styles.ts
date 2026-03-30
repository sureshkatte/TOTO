import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  card: {
    height: 64,
    borderRadius: 20,
    backgroundColor: colors.background,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrap: {
    width: 28,
    alignItems: 'center',
  },
  icon: {
    color: colors.brand,
    fontSize: 18,
    fontWeight: '700',
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '700',
  },
});
