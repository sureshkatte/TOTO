import React from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackButton} from '../components/BackButton';
import {PaymentMethodCard} from '../components/PaymentMethodCard';
import {
  getResponsiveContentWidth,
  getResponsiveHorizontalPadding,
} from '../styles/responsive';
import {styles} from './PaymentScreen.styles';

export function PaymentScreen() {
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[
          styles.content,
          {
            paddingHorizontal: getResponsiveHorizontalPadding(width),
            alignSelf: 'center',
            width: getResponsiveContentWidth(width, 'default'),
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <BackButton onPress={() => {}} />
          <Text style={styles.headerTitle}>Payment</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Trip Summary</Text>
          <Text style={styles.routeText}>MG Road → Indiranagar</Text>

          <FareRow amount="₹80" label="Base fare" />
          <FareRow amount="₹35" label="Distance (4.2 km)" />
          <FareRow amount="₹5" label="Service fee" />

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>₹120</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Select Payment</Text>

        <View style={styles.paymentList}>
          <PaymentMethodCard
            accentColor="#284A83"
            iconLabel="UPI"
            isSelected
            title="UPI / GPay"
          />
          <PaymentMethodCard
            accentColor="#3B3A33"
            iconLabel="💳"
            subtitle=""
            title="Credit / Debit Card"
          />
          <PaymentMethodCard
            accentColor="#1B4020"
            iconLabel="₹"
            title="CabGo Wallet"
          />
          <PaymentMethodCard
            accentColor="#4A3A17"
            iconLabel="₹"
            title="Cash"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function FareRow({amount, label}: {amount: string; label: string}) {
  return (
    <View style={styles.fareRow}>
      <Text style={styles.fareLabel}>{label}</Text>
      <Text style={styles.fareAmount}>{amount}</Text>
    </View>
  );
}
