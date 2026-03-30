import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  phoneCard: {
    minHeight: 82,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countrySection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingRight: 18,
  },
  flag: {
    fontSize: 18,
  },
  countryCode: {
    color: '#828287',
    fontSize: 17,
    fontWeight: '600',
  },
  divider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: '#2E2E31',
    marginVertical: 16,
  },
  phoneInput: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 16,
  },
});
