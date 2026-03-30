import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  cell: {
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  filledCell: {
    borderColor: colors.brand,
    backgroundColor: '#1B1B1B',
  },
  emptyCell: {
    borderColor: colors.borderSoft,
    backgroundColor: '#1D1D1D',
  },
  cellText: {
    color: colors.brand,
    fontSize: 24,
    fontWeight: '700',
  },
  emptyText: {
    color: 'transparent',
  },
});
