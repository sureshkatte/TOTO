import React from 'react';
import {View} from 'react-native';

import {styles} from './BrandLogo.styles';

export function BrandLogo() {
  return (
    <View style={styles.logoBox}>
      <View style={styles.logoOuter}>
        <View style={styles.logoInner} />
      </View>
    </View>
  );
}
