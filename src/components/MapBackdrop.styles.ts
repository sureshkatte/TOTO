import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    inset: 0,
    backgroundColor: '#1B2819',
    overflow: 'hidden',
  },
  gridLineVertical: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'rgba(102, 132, 93, 0.18)',
  },
  gridLineHorizontal: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'rgba(102, 132, 93, 0.18)',
  },
  pinPulse: {
    position: 'absolute',
    top: '28%',
    left: '50%',
    width: 74,
    height: 74,
    marginLeft: -37,
    marginTop: -37,
    borderRadius: 37,
    borderWidth: 2,
    borderColor: 'rgba(246, 205, 69, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pin: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.brand,
    borderWidth: 3,
    borderColor: colors.textPrimary,
  },
});
