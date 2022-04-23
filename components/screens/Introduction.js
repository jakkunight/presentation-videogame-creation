import React, { createContext } from 'react';
import { Center, Button, Text } from 'native-base';
import { TapGestureHandler } from 'react-native-gesture-handler';

const Introduction = ({ navigation }) => {
    
    return (
        <TapGestureHandler onBegan={() => {
            navigation.navigate("Initial");
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