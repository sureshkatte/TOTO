import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Pressable, Text, TextInput, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackButton} from '../components/BackButton';
import {NumericKeypad} from '../components/NumericKeypad';
import {OtpInputRow} from '../components/OtpInputRow';
import {PrimaryButton} from '../components/PrimaryButton';
import {
  getResponsiveContentWidth,
  getResponsiveHorizontalPadding,
} from '../styles/responsive';
import {colors} from '../styles/theme';
import {styles} from './OtpVerificationScreen.styles';

type OtpVerificationScreenProps = {
  onBack: () => void;
  onVerified: () => void;
  phoneNumber: string;
};

const INITIAL_TIMER_SECONDS = 42;

export function OtpVerificationScreen({
  onBack,
  onVerified,
  phoneNumber,
}: OtpVerificationScreenProps) {
  const {width} = useWindowDimensions();
  const [otp, setOtp] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_TIMER_SECONDS);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const hasTriggeredAutoVerify = useRef(false);
  const otpInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (secondsLeft === 0) {
      return;
    }

    const timerId = setTimeout(() => {
      setSecondsLeft(current => current - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [secondsLeft]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      otpInputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (otp.length !== 4 || hasTriggeredAutoVerify.current) {
      return;
    }

    hasTriggeredAutoVerify.current = true;
    setIsVerifying(true);

    const verifyTimer = setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      onVerified();
    }, 700);

    return () => clearTimeout(verifyTimer);
  }, [onVerified, otp]);

  const resendText = useMemo(() => {
    const seconds = secondsLeft.toString().padStart(2, '0');
    return `00:${seconds}`;
  }, [secondsLeft]);

  const otpValidationMessage = useMemo(() => {
    if (isVerified) {
      return 'OTP verified successfully';
    }

    if (otp.length === 0) {
      return 'Enter the 4-digit OTP sent to your phone';
    }

    if (otp.length < 4) {
      return 'OTP must be exactly 4 digits';
    }

    if (isVerifying) {
      return 'Verifying OTP...';
    }

    return '';
  }, [isVerified, isVerifying, otp.length]);

  const handleKeyPress = (key: string) => {
    if (isVerifying || isVerified) {
      return;
    }

    if (key === '⌫') {
      hasTriggeredAutoVerify.current = false;
      setOtp(current => current.slice(0, -1));
      return;
    }

    setOtp(current => {
      if (current.length >= 4) {
        return current;
      }

      return `${current}${key}`;
    });
  };

  const handleOtpChange = (value: string) => {
    if (isVerifying || isVerified) {
      return;
    }

    hasTriggeredAutoVerify.current = false;
    setOtp(value.replace(/[^0-9]/g, '').slice(0, 4));
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <Pressable
        onPress={() => otpInputRef.current?.focus()}
        style={[
          styles.screen,
          {paddingHorizontal: getResponsiveHorizontalPadding(width)},
        ]}>
        <TextInput
          autoFocus
          caretHidden
          keyboardType="number-pad"
          maxLength={4}
          onChangeText={handleOtpChange}
          ref={otpInputRef}
          selectionColor={colors.brand}
          style={styles.hiddenInput}
          value={otp}
        />
        <View
          style={[
            styles.contentWrap,
            {
              alignSelf: 'center',
              width: getResponsiveContentWidth(width, 'compact'),
            },
          ]}>
          <View style={styles.topSection}>
          <BackButton onPress={onBack} />

          <View style={styles.headerBlock}>
            <Text style={styles.title}>Verify OTP</Text>
            <Text style={styles.subtitle}>Sent to +91 {formatPhoneNumber(phoneNumber)}</Text>
          </View>

          <OtpInputRow code={otp} />

          <Text style={styles.validationText}>{otpValidationMessage}</Text>

          <Text style={styles.resendText}>
            Resend in <Text style={styles.resendTime}>{resendText}</Text>
          </Text>

          <PrimaryButton
            disabled={otp.length !== 4 || isVerifying || isVerified}
            label={isVerified ? 'Verified' : isVerifying ? 'Verifying...' : 'Verify'}
            onPress={() => {}}
          />
        </View>

          <NumericKeypad
            disabled={isVerifying || isVerified}
            onKeyPress={handleKeyPress}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

function formatPhoneNumber(phoneNumber: string) {
  const padded = phoneNumber.padEnd(10, '0').slice(0, 10);
  return `${padded.slice(0, 5)} ${padded.slice(5)}`;
}
