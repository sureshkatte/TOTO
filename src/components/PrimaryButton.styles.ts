import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 18,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.brandMuted,
  },
  buttonPressed: {
    opacity: 0.92,
  },
  label: {
    color: colors.darkText,
    fontSize: 22,
    fontWeight: '700',
  },
  labelDisabled: {
    opacity: 0.9,
  },
});
