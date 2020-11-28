import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

export default function App() {
  return MyApp();
}

const MyApp = () => {
  return (
    <SafeAreaView>
      <ThemeProvider>
        <Button title="Hey!" />
        <Button title="Hey 2!" />
        <Button title="Hey 3!" />
      </ThemeProvider>
    </SafeAreaView>
  );
};
