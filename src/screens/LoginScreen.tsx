import React, {useEffect, useMemo, useRef} from 'react';
import {Text, TextInput, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BrandLogo} from '../components/BrandLogo';
import {PhoneInputCard} from '../components/PhoneInputCard';
import {PrimaryButton} from '../components/PrimaryButton';
import {
  getResponsiveContentWidth,
  getResponsiveHorizontalPadding,
} from '../styles/responsive';
import {styles} from './LoginScreen.styles';

type LoginScreenProps = {
  onContinue: () => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
};

export function LoginScreen({
  onContinue,
  phoneNumber,
  setPhoneNumber,
}: LoginScreenProps) {
  const {width} = useWindowDimensions();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timerId);
  }, []);

  const phoneValidationMessage = useMemo(() => {
    if (phoneNumber.length === 0) {
      return 'Enter your 10-digit mobile number';
    }

    if (phoneNumber.length < 10) {
      return 'Phone number must be exactly 10 digits';
    }

    return '';
  }, [phoneNumber]);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View
        style={[
          styles.screen,
          {paddingHorizontal: getResponsiveHorizontalPadding(width)},
        ]}>
        <View
          style={[
            styles.content,
            {
              alignSelf: 'center',
              width: getResponsiveContentWidth(width, 'compact'),
            },
          ]}>
          <BrandLogo />

          <View style={styles.headerBlock}>
            <Text style={styles.subtitle}>Enter your phone to continue</Text>
          </View>

          <PhoneInputCard
            autoFocus
            phoneNumber={phoneNumber}
            ref={inputRef}
            setPhoneNumber={setPhoneNumber}
          />

          <Text style={styles.validationText}>{phoneValidationMessage}</Text>

          <PrimaryButton
            disabled={phoneNumber.length !== 10}
            label="Continue"
            onPress={onContinue}
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            width: getResponsiveContentWidth(width, 'compact'),
          }}>
          <Text style={styles.termsText}>
            By continuing, you agree to our Terms & Privacy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
