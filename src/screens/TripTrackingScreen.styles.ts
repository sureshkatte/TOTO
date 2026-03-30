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
  },
  statusCard: {
    marginHorizontal: 18,
    marginTop: 14,
    borderRadius: 22,
    backgroundColor: '#111111',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  statusLabel: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: '700',
  },
  statusTime: {
    color: colors.brand,
    fontSize: 24,
    fontWeight: '800',
    marginTop: 2,
  },
  progressTrack: {
    height: 28,
    marginTop: 6,
    justifyContent: 'center',
  },
  progressFill: {
    height: 3,
    borderRadius: 2,
    backgroundColor: '#3C3520',
  },
  startDot: {
    position: 'absolute',
    left: 72,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.brand,
  },
  carEmoji: {
    position: 'absolute',
    left: '58%',
    fontSize: 22,
    marginLeft: -10,
  },
  endDot: {
    position: 'absolute',
    right: 8,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4A4A4A',
  },
  bottomSheet: {
    marginTop: 'auto',
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 10,
    gap: 20,
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.darkText,
    fontSize: 28,
    fontWeight: '800',
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    color: colors.textPrimary,
    fontSize: 21,
    fontWeight: '800',
  },
  driverMeta: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 2,
  },
  rating: {
    color: colors.brand,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 6,
  },
  etaPill: {
    height: 42,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  etaText: {
    color: colors.brand,
    fontSize: 16,
    fontWeight: '800',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 14,
  },
});
