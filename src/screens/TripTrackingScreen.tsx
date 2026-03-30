import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ActionTile} from '../components/ActionTile';
import {AppTabBar} from '../components/AppTabBar';
import {MapBackdrop} from '../components/MapBackdrop';
import {
  getResponsiveContentWidth,
  getResponsiveHorizontalPadding,
} from '../styles/responsive';
import {styles} from './TripTrackingScreen.styles';

export function TripTrackingScreen() {
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <MapBackdrop />

        <View
          style={[
            styles.statusCard,
            {
              marginHorizontal: getResponsiveHorizontalPadding(width),
              alignSelf: 'center',
              width: getResponsiveContentWidth(width, 'wide'),
            },
          ]}>
          <Text style={styles.statusLabel}>Arriving in</Text>
          <Text style={styles.statusTime}>4 min</Text>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
            <View style={styles.startDot} />
            <Text style={styles.carEmoji}>🚗</Text>
            <View style={styles.endDot} />
          </View>
        </View>

        <View
          style={[
            styles.bottomSheet,
            {
              alignSelf: 'center',
              width: getResponsiveContentWidth(width, 'wide'),
              paddingHorizontal: getResponsiveHorizontalPadding(width),
            },
          ]}>
          <View style={styles.driverRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AK</Text>
            </View>

            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>Arjun Kumar</Text>
              <Text style={styles.driverMeta}>KA 05 AB 1234</Text>
              <Text style={styles.driverMeta}>Swift Dzire</Text>
              <Text style={styles.rating}>★★★★★ 4.9</Text>
            </View>

            <View style={styles.etaPill}>
              <Text style={styles.etaText}>4 min</Text>
            </View>
          </View>

          <View style={styles.actionsRow}>
            <ActionTile icon="📞" label="Call" />
            <ActionTile icon="💬" label="Chat" />
            <ActionTile icon="🆘" label="SOS" />
          </View>

          <AppTabBar activeTab="trips" />
        </View>
      </View>
    </SafeAreaView>
  );
}
