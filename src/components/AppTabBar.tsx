import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './AppTabBar.styles';

type TabKey = 'home' | 'trips' | 'profile';

type AppTabBarProps = {
  activeTab: TabKey;
};

const tabs: Array<{icon: string; key: TabKey; label: string}> = [
  {icon: '⌂', key: 'home', label: 'Home'},
  {icon: '◔', key: 'trips', label: 'Trips'},
  {icon: '◡', key: 'profile', label: 'Profile'},
];

export function AppTabBar({activeTab}: AppTabBarProps) {
  return (
    <View style={styles.bar}>
      {tabs.map(tab => {
        const selected = tab.key === activeTab;

        return (
          <View key={tab.key} style={styles.tab}>
            <Text style={[styles.icon, selected && styles.selectedText]}>
              {tab.icon}
            </Text>
            <Text style={[styles.label, selected && styles.selectedText]}>
              {tab.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
