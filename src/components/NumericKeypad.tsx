import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from './NumericKeypad.styles';

const keypadRows = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['', '0', '⌫'],
];

type NumericKeypadProps = {
  disabled?: boolean;
  onKeyPress: (value: string) => void;
};

export function NumericKeypad({
  disabled = false,
  onKeyPress,
}: NumericKeypadProps) {
  return (
    <View style={styles.container}>
      {keypadRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(key => {
            if (key === '') {
              return <View key={`${rowIndex}-empty`} style={styles.keyPlaceholder} />;
            }

            return (
              <Pressable
                disabled={disabled}
                key={key}
                onPress={() => onKeyPress(key)}
                style={({pressed}) => [
                  styles.key,
                  disabled && styles.keyDisabled,
                  pressed && !disabled && styles.keyPressed,
                ]}>
                <Text style={styles.keyLabel}>{key}</Text>
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
}
