import React from 'react';
import {View} from 'react-native';

import {styles} from './MapBackdrop.styles';

export function MapBackdrop() {
  return (
    <View style={styles.container}>
      <View style={[styles.gridLineVertical, {left: '22%'}]} />
      <View style={[styles.gridLineVertical, {left: '58%'}]} />
      <View style={[styles.gridLineVertical, {left: '80%'}]} />
      <View style={[styles.gridLineHorizontal, {top: '22%'}]} />
      <View style={[styles.gridLineHorizontal, {top: '46%'}]} />
      <View style={[styles.gridLineHorizontal, {top: '68%'}]} />
      <View style={styles.pinPulse}>
        <View style={styles.pin} />
      </View>
    </View>
  );
}
