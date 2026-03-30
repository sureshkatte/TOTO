import React, {forwardRef} from 'react';
import {Text, TextInput, View} from 'react-native';

import {colors} from '../styles/theme';
import {styles} from './LocationInputCard.styles';

type LocationInputCardProps = {
  icon: string;
  onChangeText: (value: string) => void;
  onFocus: () => void;
  placeholder: string;
  value: string;
};

export const LocationInputCard = forwardRef<TextInput, LocationInputCardProps>(
  ({icon, onChangeText, onFocus, placeholder, value}, ref) => {
    return (
      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <TextInput
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={onChangeText}
          onFocus={onFocus}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          ref={ref}
          selectTextOnFocus
          selectionColor={colors.brand}
          style={styles.input}
          value={value}
        />
      </View>
    );
  },
);

LocationInputCard.displayName = 'LocationInputCard';
