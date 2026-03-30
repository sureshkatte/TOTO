import {StyleSheet} from 'react-native';

import {colors} from '../styles/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 28,
    gap: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  headerTitle: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: '800',
  },
  summaryCard: {
    borderRadius: 24,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 22,
    paddingVertical: 22,
    gap: 12,
  },
  summaryTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '800',
  },
  routeText: {
    color: colors.textSecondary,
    fontSize: 17,
    fontWeight: '600',
  },
  fareRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fareLabel: {
    color: '#A8A8AC',
    fontSize: 17,
    fontWeight: '600',
  },
  fareAmount: {
    color: '#A8A8AC',
    fontSize: 17,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#303030',
    marginTop: 2,
    marginBottom: 2,
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalLabel: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
  },
  totalAmount: {
    color: colors.brand,
    fontSize: 20,
    fontWeight: '800',
  },
  sectionTitle: {
    color: '#A8A8AC',
    fontSize: 18,
    fontWeight: '700',
  },
  paymentList: {
    gap: 14,
  },
});
