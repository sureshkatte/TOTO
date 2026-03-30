import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';

import {styles} from './OtpInputRow.styles';

type OtpInputRowProps = {
  code: string;
  length?: number;
};

export function OtpInputRow({code, length = 4}: OtpInputRowProps) {
  const {width} = useWindowDimensions();
  const cellSize = Math.min(72, Math.max(56, (width - 104) / length));

  return (
    <View style={styles.row}>
      {Array.from({length}).map((_, index) => {
        const value = code[index] ?? '';
        const filled = value.length > 0;

        return (
          <View
            key={index}
            style={[
              styles.cell,
              {height: cellSize, width: cellSize},
              filled ? styles.filledCell : styles.emptyCell,
            ]}>
            <Text style={[styles.cellText, !filled && styles.emptyText]}>
              {value}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
