import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './BackButton.styles';

type BackButtonProps = {
  onPress: () => void;
};

export function BackButton({onPress}: BackButtonProps) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.icon}>{'‹'}</Text>
    </Pressable>
  );
}
