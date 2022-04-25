import React, { useContext } from 'react';
import { useWindowDimensions } from 'react-native';
import { Center } from 'native-base';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Title from '../Title.js';
import Router from '../navigator/Router.js';

const InitialScreen = () => {

    const windowSize = useWindowDimensions();
    const { active, setActive } = useContext(Router);

    return (
        <TapGestureHandler onActivated={({ nativeEvent }) => {
            if(nativeEvent.x > windowSize.width / 2){
                // Navigate to next screen
                setActive(1);
            }else{
                // Navigate to previous screen
                setActive(0);
            }
        }} >
            <Center size={"100%"} >
                <Title title={"Creaci\u00F3n de Videojuegos"} subtitle={"ft. Construct 2"} />
            </Center>
        </TapGestureHandler>
    );
};

export default InitialScreen;