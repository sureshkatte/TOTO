import React, {forwardRef} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

import {colors} from '../styles/theme';
import {styles} from './PhoneInputCard.styles';

type PhoneInputCardProps = {
  autoFocus?: boolean;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
};

export const PhoneInputCard = forwardRef<TextInput, PhoneInputCardProps>(
  ({autoFocus = false, phoneNumber, setPhoneNumber}, ref) => {
  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value.replace(/[^0-9]/g, '').slice(0, 10));
  };

  return (
    <Pressable onPress={() => ref && 'current' in ref && ref.current?.focus()}>
      <View style={styles.phoneCard}>
      <View style={styles.countrySection}>
        <Text style={styles.flag}>🇮🇳</Text>
        <Text style={styles.countryCode}>+91</Text>
      </View>

      <View style={styles.divider} />

      <TextInput
        autoFocus={autoFocus}
        ref={ref}
        keyboardType="number-pad"
        maxLength={10}
        onChangeText={handlePhoneChange}
        placeholder="Phone number"
        placeholderTextColor="#666666"
        selectionColor={colors.brand}
        style={styles.phoneInput}
        value={phoneNumber}
      />
      </View>
    </Pressable>
  );
  },
);

PhoneInputCard.displayName = 'PhoneInputCard';
