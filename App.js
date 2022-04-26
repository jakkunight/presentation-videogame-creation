import React from 'react';
import { useWindowDimensions } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Navigator from './components/navigator/Navigator';
import Screen from './components/navigator/Screen';
import Title from './components/Title';
import TitleContent from './components/TitleContent';
import SectionTitle from './components/SectionTitle';
import { ANIMATE, EXIT, INITIAL } from './components/navigator/transitions';

// LayoutAnimations are only aviable on mobile!!!

const App = () => {

    const screenSize = useWindowDimensions();

    return (
        <NativeBaseProvider>
            <Navigator homeScreenId={0} >
                <Screen
                    id={0} prev={0} next={1} initial={INITIAL.SlideToUp} animate={ANIMATE.SlideToUp} exit={EXIT.SlideToUp} >
                    <Title title={"Creaci\u00F3n de Videojuegos"} subtitle={"ft. Construct 2"} />
                </Screen>
                <Screen
                    id={1} prev={0} next={2} initial={INITIAL.Fade} animate={ANIMATE.Fade} exit={EXIT.Fade} >
                    <SectionTitle title={"Introducci\u00F3n"} />
                </Screen>
                <Screen
                    id={2} prev={1} next={3} initial={INITIAL.SlideToLeft} animate={ANIMATE.SlideToLeft} exit={EXIT.SlideToLeft} >
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
                <Screen
                    id={3} prev={2} next={4} initial={INITIAL.Zoom} animate={ANIMATE.Zoom} exit={EXIT.Zoom} >
                    <SectionTitle title={"Motivaci\u00F3n"} />
                </Screen>
                <Screen
                    id={4} prev={3} next={5} initial={INITIAL.SlideToDown} animate={ANIMATE.SlideToDown} exit={EXIT.SlideToDown} >
                    <TitleContent
                        title={"¿Por qu\u00E9 nos divertimos?"}
                        paragraphs={[
                            "¿Qu\u00E9 es la diversi\u00F3n?",
                            "¿Por qu\u00E9 los videojuegos son divertidos?",
                            "¿Qu\u00E9 habilidades adquiero en el proceso?",
                            "¿Qu\u00E9 puedo aprender de ello?",
                            "¿Puedo vivir de ello?",
                            "¿C\u00F3mo es la industria de los videojuegos?",
                            "¿Es DIF\u00CDCIL?"
                        ]}
                    />
                </Screen>
                <Screen
                    id={5} prev={4} next={6} initial={INITIAL.Fade} animate={ANIMATE.Fade} exit={EXIT.Fade} >
                    <TitleContent
                        title={"¿Por d\u00F3nde iniciar?"}
                        paragraphs={[
                            'Lo mejor es y ser\u00E1 siempre el cd\u00F3igo. Todo videojuego, pasa por el c\u00F3digo sin falta, ya que es lo que mueve el juego y los programas utilizados durante el desarrollo. Por lo general, para no perder tiempo en el proceso y ahorrar gastos innecesarios, las empresas utilizan lo que se llama un "game engine" o "motor de juego", el cual es un software que realiza ciertas tareas b\u00E1sicas de los videojuegos por nosotros adem\u00E1s nos deja implementar nuestras mejoras sobre plantillas de juegos predeterminadas y otras caracter\u00EDsticas casi sin saber programaci\u00F3n. El game engine que vamos a utilizar es Construct 2, un game engine usado en juegos de la Web.',
                        ]}
                    />
                </Screen>
                <Screen
                    id={6} prev={5} next={6} initial={INITIAL.Fade} animate={ANIMATE.Fade} exit={EXIT.Fade} >
                    <SectionTitle title={"Gracias por su atenci\u00F3n"} />
                </Screen>
            </Navigator>
        </NativeBaseProvider>
    );
};

export default App;
