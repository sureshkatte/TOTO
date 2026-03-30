import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from './LocationAutocompletePanel.styles';

type LocationAutocompletePanelProps = {
  emptyMessage: string;
  isLoading?: boolean;
  suggestions: string[];
  title: string;
  onSelect: (value: string) => void;
};

export function LocationAutocompletePanel({
  emptyMessage,
  isLoading = false,
  suggestions,
  title,
  onSelect,
}: LocationAutocompletePanelProps) {
  return (
    <View style={styles.panel}>
      <Text style={styles.title}>{title}</Text>
      {isLoading ? (
        <Text style={styles.emptyMessage}>Loading locations...</Text>
      ) : suggestions.length > 0 ? (
        suggestions.map(suggestion => (
          <Pressable
            key={suggestion}
            onPress={() => onSelect(suggestion)}
            style={({pressed}) => [styles.row, pressed && styles.rowPressed]}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.label}>{suggestion}</Text>
          </Pressable>
        ))
      ) : (
        <Text style={styles.emptyMessage}>{emptyMessage}</Text>
      )}
    </View>
  );
}
