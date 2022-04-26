import React from 'react';
import { useWindowDimensions } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Navigator from './components/navigator/Navigator';
import Screen from './components/navigator/Screen';
import Title from './components/Title';
import TitleContent from './components/TitleContent';

// LayoutAnimations are only aviable on mobile!!!

const App = () => {

  const screenSize = useWindowDimensions();

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
          translateX: -screenSize.width
        }} animate={{
          translateX: 0,
          transition: {
            duration: 1000,
            useNativeDriver: false
          }
        }} exit={{
          translateX: screenSize.width
        }} prev={0} next={0} >
          <TitleContent
            title={"Sobre m\u00ED:"}
            paragraphs={[
              "Soy Santiago Wu, conocido en Internet como Jakku Night.",
              "Soy un creador de contenido en Twitch y YouTube.",
              "Me especializo en la creación de videojuegos.",
              "Hago dibujos estilo manga/anime.",
              "Compongo mis propias canciones para mis streams y videos.",
              "Trabajo con programas libres y gratuitos.",
              "Hago todo desde una tablet Android, sin PC o portátil."
            ]}
          />
        </Screen>
      </Navigator>
    </NativeBaseProvider>
  );
};

export default App;
