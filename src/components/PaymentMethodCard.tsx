import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from './PaymentMethodCard.styles';

type PaymentMethodCardProps = {
  accentColor: string;
  iconLabel: string;
  isSelected?: boolean;
  subtitle?: string;
  title: string;
};

export function PaymentMethodCard({
  accentColor,
  iconLabel,
  isSelected = false,
  subtitle,
  title,
}: PaymentMethodCardProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.card,
        isSelected && styles.selectedCard,
        pressed && styles.pressed,
      ]}>
      <View style={[styles.iconBox, {backgroundColor: accentColor}]}>
        <Text style={styles.iconLabel}>{iconLabel}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      <View style={[styles.radio, isSelected && styles.selectedRadio]}>
        {isSelected ? <View style={styles.radioDot} /> : null}
      </View>
    </Pressable>
  );
}
