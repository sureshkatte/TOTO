import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from './RideOptionCard.styles';

type RideOptionCardProps = {
  eta: string;
  fare: string;
  isSelected?: boolean;
  seats: string;
  title: string;
  onPress: () => void;
};

export function RideOptionCard({
  eta,
  fare,
  isSelected = false,
  seats,
  title,
  onPress,
}: RideOptionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.card,
        isSelected && styles.selectedCard,
        pressed && styles.pressed,
      ]}>
      <View style={styles.left}>
        <View style={styles.iconWrap}>
          <Text style={styles.icon}>🚕</Text>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.meta}>
            {eta} away · {seats}
          </Text>
        </View>
      </View>
      <Text style={[styles.fare, isSelected && styles.selectedFare]}>{fare}</Text>
    </Pressable>
  );
}
