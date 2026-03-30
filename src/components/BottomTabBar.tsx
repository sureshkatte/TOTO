import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './BottomTabBar.styles';

const tabs = [
  {icon: '⌂', label: 'Home', selected: true},
  {icon: '◔', label: 'Trips', selected: false},
  {icon: '◡', label: 'Profile', selected: false},
];

export function BottomTabBar() {
  return (
    <View style={styles.bar}>
      {tabs.map(tab => (
        <View key={tab.label} style={styles.tab}>
          <Text style={[styles.icon, tab.selected && styles.selectedText]}>
            {tab.icon}
          </Text>
          <Text style={[styles.label, tab.selected && styles.selectedText]}>
            {tab.label}
          </Text>
        </View>
      ))}
    </View>
  );
}
