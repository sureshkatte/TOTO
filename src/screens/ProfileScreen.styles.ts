import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.darkText,
    fontSize: 40,
    fontWeight: '800',
  },
  userInfo: {
    flex: 1,
    gap: 6,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '800',
  },
  phone: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
  rating: {
    color: colors.brand,
    fontSize: 16,
    fontWeight: '700',
  },
  menu: {
    marginTop: 18,
  },
});
