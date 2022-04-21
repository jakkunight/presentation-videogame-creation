import React from 'react';
import { NativeBaseProvider } from 'native-base';
import AnimatedBox from './components/AnimatedBox';

const App = () => {
  return (
    <NativeBaseProvider>
      <AnimatedBox />
    </NativeBaseProvider>
  );
};

export default App;
