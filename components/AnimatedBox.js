import React from 'react';
import { Box, Text, Heading, Center, Button } from 'native-base';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const AnimatedCenter = Animated.createAnimatedComponent(Center);

const AnimatedBox = () => {

    const randomPosition = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: randomPosition.value
            }]
        };
    });

    return (
        <Center>
            <AnimatedCenter size={100} bgColor={"darkBlue.900"} textAlign={"center"} style={[{}, animatedStyle]} >
                <Text color={"white"} size={"4xl"} >
                    {"\u300EHello Doumo!\u300F"}
                </Text>
            </AnimatedCenter>
            <Button
                onPress={() => {
                    console.log("Moving...");
                    randomPosition.value = Math.random() * 350;
                }}
            >
                Move
            </Button>
        </Center>
    );
};

export default AnimatedBox;