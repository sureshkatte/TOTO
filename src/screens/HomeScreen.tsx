import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Text, TextInput, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BottomTabBar} from '../components/BottomTabBar';
import {LocationAutocompletePanel} from '../components/LocationAutocompletePanel';
import {LocationInputCard} from '../components/LocationInputCard';
import {MapBackdrop} from '../components/MapBackdrop';
import {PrimaryButton} from '../components/PrimaryButton';
import {RideOptionCard} from '../components/RideOptionCard';
import {hasGoogleMapsApiKey} from '../config/googleMaps';
import {
  createPlacesSessionToken,
  fetchPlaceAutocomplete,
  reverseGeocodeCoords,
} from '../services/googleMaps';
import {getCurrentCoords} from '../services/location';
import {
  getResponsiveContentWidth,
  getResponsiveHorizontalPadding,
  isTabletWidth,
} from '../styles/responsive';
import {styles} from './HomeScreen.styles';

type ActiveField = 'dropoff' | 'pickup';
type RideOption = 'mini' | 'prime';

export function HomeScreen() {
  const {width} = useWindowDimensions();
  const tabletLayout = isTabletWidth(width);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [activeField, setActiveField] = useState<ActiveField>('pickup');
  const [selectedRide, setSelectedRide] = useState<RideOption>('mini');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [locationMessage, setLocationMessage] = useState(
    'Type at least 3 letters to see location suggestions',
  );
  const pickupInputRef = useRef<TextInput>(null);
  const dropoffInputRef = useRef<TextInput>(null);
  const sessionTokenRef = useRef(createPlacesSessionToken());

  useEffect(() => {
    const timerId = setTimeout(() => {
      pickupInputRef.current?.focus();
    }, 200);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadCurrentLocation = async () => {
      if (!hasGoogleMapsApiKey()) {
        setLocationMessage(
          'Add your Google Maps API key in src/config/googleMaps.ts to enable GPS and autocomplete',
        );
        return;
      }

      try {
        setLocationMessage('Fetching your current location...');
        const coords = await getCurrentCoords();
        const address = await reverseGeocodeCoords(coords);

        if (isCancelled) {
          return;
        }

        if (address) {
          setPickup(address);
          setLocationMessage('Type at least 3 letters to search a different location');
          setTimeout(() => dropoffInputRef.current?.focus(), 150);
          return;
        }

        setLocationMessage('We got your GPS coordinates, but could not resolve the address');
      } catch (error) {
        if (!isCancelled) {
          setLocationMessage(
            error instanceof Error
              ? error.message
              : 'Unable to fetch your current location',
          );
        }
      }
    };

    loadCurrentLocation();

    return () => {
      isCancelled = true;
    };
  }, []);

  const activeQuery = useMemo(
    () => (activeField === 'pickup' ? pickup : dropoff).trim(),
    [activeField, dropoff, pickup],
  );

  useEffect(() => {
    let isCancelled = false;

    const loadSuggestions = async () => {
      if (!hasGoogleMapsApiKey()) {
        setSuggestions([]);
        return;
      }

      if (activeQuery.length < 3) {
        setSuggestions([]);
        setIsLoadingSuggestions(false);
        setLocationMessage('Type at least 3 letters to see location suggestions');
        return;
      }

      try {
        setIsLoadingSuggestions(true);
        const results = await fetchPlaceAutocomplete(
          activeQuery,
          sessionTokenRef.current,
        );

        if (isCancelled) {
          return;
        }

        const nextSuggestions = results
          .map(item => item.text)
          .filter(text => text !== pickup && text !== dropoff)
          .slice(0, 5);

        setSuggestions(nextSuggestions);
        setLocationMessage(
          nextSuggestions.length > 0
            ? 'Select a suggested location'
            : 'No matching locations found',
        );
      } catch (error) {
        if (!isCancelled) {
          setSuggestions([]);
          setLocationMessage(
            error instanceof Error
              ? error.message
              : 'Unable to fetch location suggestions',
          );
        }
      } finally {
        if (!isCancelled) {
          setIsLoadingSuggestions(false);
        }
      }
    };

    loadSuggestions();

    return () => {
      isCancelled = true;
    };
  }, [activeField, activeQuery, dropoff, pickup]);

  const handleSelectSuggestion = (value: string) => {
    sessionTokenRef.current = createPlacesSessionToken();

    if (activeField === 'pickup') {
      setPickup(value);
      setTimeout(() => dropoffInputRef.current?.focus(), 50);
    } else {
      setDropoff(value);
    }
  };

  const selectedRideLabel =
    selectedRide === 'mini' ? 'Book CabGo Mini' : 'Book CabGo Prime';

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <MapBackdrop />

        <View
          style={[
            styles.topContent,
            {
              paddingHorizontal: getResponsiveHorizontalPadding(width),
              alignSelf: 'center',
              width: getResponsiveContentWidth(width, 'wide'),
            },
          ]}>
          <View style={styles.locationStack}>
            <LocationInputCard
              icon="◎"
              onChangeText={setPickup}
              onFocus={() => setActiveField('pickup')}
              placeholder="Enter pickup location"
              ref={pickupInputRef}
              value={pickup}
            />
            <LocationInputCard
              icon="▣"
              onChangeText={setDropoff}
              onFocus={() => setActiveField('dropoff')}
              placeholder="Where to?"
              ref={dropoffInputRef}
              value={dropoff}
            />
          </View>

          <LocationAutocompletePanel
            emptyMessage={locationMessage}
            isLoading={isLoadingSuggestions}
            onSelect={handleSelectSuggestion}
            suggestions={suggestions}
            title={activeField === 'pickup' ? 'Pickup suggestions' : 'Drop-off suggestions'}
          />
        </View>

        <View
          style={[
            styles.bottomSheet,
            {
              alignSelf: 'center',
              width: getResponsiveContentWidth(width, 'wide'),
              marginBottom: tabletLayout ? 12 : 0,
            },
          ]}>
          <View style={styles.handle} />
          <Text style={styles.sheetTitle}>Choose a ride</Text>

          <View style={styles.rideList}>
            <RideOptionCard
              eta="3 min"
              fare="₹120"
              isSelected={selectedRide === 'mini'}
              onPress={() => setSelectedRide('mini')}
              seats="4 seats"
              title="CabGo Mini"
            />
            <RideOptionCard
              eta="5 min"
              fare="₹185"
              isSelected={selectedRide === 'prime'}
              onPress={() => setSelectedRide('prime')}
              seats="4 seats"
              title="CabGo Prime"
            />
          </View>

          <PrimaryButton
            disabled={dropoff.trim().length === 0}
            label={selectedRideLabel}
            onPress={() => {}}
          />

          <BottomTabBar />
        </View>
      </View>
    </SafeAreaView>
  );
}
