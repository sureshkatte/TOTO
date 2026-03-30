import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen} from './src/screens/HomeScreen';
import {LoginScreen} from './src/screens/LoginScreen';
import {OtpVerificationScreen} from './src/screens/OtpVerificationScreen';

type Screen = 'login' | 'otp' | 'home';

function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    if (phoneNumber.length === 10) {
      setScreen('otp');
    }
  };

  const handleBack = () => {
    setScreen('login');
  };

  const handleOtpVerified = () => {
    setScreen('home');
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#101010" />
      {screen === 'login' ? (
        <LoginScreen
          onContinue={handleContinue}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      ) : screen === 'otp' ? (
        <OtpVerificationScreen
          onBack={handleBack}
          onVerified={handleOtpVerified}
          phoneNumber={phoneNumber}
        />
      ) : (
        <HomeScreen />
      )}
    </SafeAreaProvider>
  );
}

export default App;
