import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 18,
    paddingVertical: 18,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  key: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.keySurface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyPressed: {
    opacity: 0.78,
  },
  keyDisabled: {
    opacity: 0.45,
  },
  keyPlaceholder: {
    flex: 1,
  },
  keyLabel: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '500',
  },
});
