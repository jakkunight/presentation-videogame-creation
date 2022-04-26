import React, { useContext } from 'react';
import { Center, Text } from 'native-base';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import Router from '../navigator/Router.js';

const Introduction = ({}) => {

    const windowSize = useWindowDimensions();
    const context = useContext(Router);

    return (
        <TapGestureHandler onActivated={({ nativeEvent }) => {
            if(nativeEvent.x > windowSize.width / 2){
                // Navigate to next screen
                context.navigate(0);
            }else{
                // Navigate to previous screen
                context.navigate(1);
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