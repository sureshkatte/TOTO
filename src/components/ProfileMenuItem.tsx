import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from './ProfileMenuItem.styles';

type ProfileMenuItemProps = {
  badge?: string;
  danger?: boolean;
  icon: string;
  label: string;
};

export function ProfileMenuItem({
  badge,
  danger = false,
  icon,
  label,
}: ProfileMenuItemProps) {
  return (
    <Pressable style={({pressed}) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.iconWrap}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <Text style={[styles.label, danger && styles.dangerText]}>{label}</Text>

      {badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      ) : null}

      <Text style={[styles.chevron, danger && styles.dangerText]}>›</Text>
    </Pressable>
  );
}
