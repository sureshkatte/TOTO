import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  logoBox: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoOuter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '45deg'}],
  },
  logoInner: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: colors.brand,
  },
});
