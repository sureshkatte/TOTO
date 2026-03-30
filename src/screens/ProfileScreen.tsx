import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ProfileMenuItem} from '../components/ProfileMenuItem';
import {
  getResponsiveContentWidth,
  getResponsiveHorizontalPadding,
} from '../styles/responsive';
import {styles} from './ProfileScreen.styles';

export function ProfileScreen() {
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View
        style={[
          styles.screen,
          {paddingHorizontal: getResponsiveHorizontalPadding(width)},
        ]}>
        <View
          style={{
            alignSelf: 'center',
            width: getResponsiveContentWidth(width, 'default'),
          }}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RK</Text>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.name}>Rahul Kumar</Text>
            <Text style={styles.phone}>+91 98765 43210</Text>
            <Text style={styles.rating}>★ 4.8 rider rating</Text>
          </View>
        </View>

        <View style={styles.menu}>
          <ProfileMenuItem icon="⌾" label="My Profile" />
          <ProfileMenuItem icon="◔" label="Trip History" />
          <ProfileMenuItem icon="▣" label="Payment Methods" />
          <ProfileMenuItem badge="NEW" icon="☆" label="Rewards & Offers" />
          <ProfileMenuItem icon="ⓘ" label="Help & Support" />
          <ProfileMenuItem danger icon="⇱" label="Sign Out" />
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
