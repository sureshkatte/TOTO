import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from './ActionTile.styles';

type ActionTileProps = {
  icon: string;
  label: string;
};

export function ActionTile({icon, label}: ActionTileProps) {
  return (
    <Pressable style={({pressed}) => [styles.tile, pressed && styles.pressed]}>
      <View style={styles.iconWrap}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}
