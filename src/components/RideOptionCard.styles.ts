import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  card: {
    minHeight: 74,
    borderRadius: 20,
    backgroundColor: '#232323',
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: colors.brand,
    backgroundColor: '#1A1A1A',
  },
  pressed: {
    opacity: 0.82,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconWrap: {
    width: 52,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#3A3523',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  fare: {
    color: colors.brand,
    fontSize: 18,
    fontWeight: '800',
  },
  selectedFare: {
    color: colors.brand,
  },
});
