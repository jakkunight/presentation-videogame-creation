import React from 'react';
import { Center } from 'native-base';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Title from '../Title.js';

const InitialScreen = ({ navigation }) => {
    return (
        <TapGestureHandler onBegan={() => {
            navigation.navigate("Introduction");
        }} >
            <Center size={"100%"} >
                <Title title={"Creaci\u00F3n de Videojuegos"} subtitle={"ft. Construct 2"} />
            </Center>
        </TapGestureHandler>
    );
};

export default InitialScreen;