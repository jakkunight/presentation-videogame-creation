import React, { useContext } from 'react';
import { Center, Button, Text } from 'native-base';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import Router from '../navigator/Router.js';

const Introduction = () => {

    const windowSize = useWindowDimensions();
    const { active, setActive } = useContext(Router);

    return (
        <TapGestureHandler onActivated={({ nativeEvent }) => {
            if(nativeEvent.x > windowSize.width / 2){
                // Navigate to next screen
                setActive(0);
            }else{
                // Navigate to previous screen
                setActive(1);
            }
        }} >
            <Center textAlign={"center"} size={"100%"} >
                <Text>
                    Hello World!
                </Text>
            </Center>
        </TapGestureHandler>
    );
};

export default Introduction;