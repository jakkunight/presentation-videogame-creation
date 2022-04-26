import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Navigator from './components/navigator/Navigator';
import Screen from './components/navigator/Screen';
import Title from './components/Title';

// LayoutAnimations are only aviable on mobile!!!

const App = () => {

  return (
    <NativeBaseProvider>
      <Navigator homeScreenId={0} >
        <Screen id={0} initial={{
          opacity: 0
        }} animate={{
          opacity: 1,
          transition: {
            duration: 1000,
            useNativeDriver: false
          }
        }} exit={{
          opacity: 0
        }} prev={0} next={1} >
          <Title title={"Creaci\u00F3n de Videojuegos"} subtitle={"ft. Construct 2"} />
        </Screen>
        <Screen id={1} initial={{
          opacity: 0
        }} animate={{
          opacity: 1,
          transition: {
            duration: 1000,
            useNativeDriver: false
          }
        }} exit={{
          opacity: 0
        }} prev={0} next={0} >
          <Title title={"Creaci\u00F3n de Videojuegos1"} subtitle={"ft. Construct 2.1"} />
        </Screen>
      </Navigator>
    </NativeBaseProvider>
  );
};

export default App;
