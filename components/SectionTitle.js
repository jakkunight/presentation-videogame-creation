import React from 'react';
import { Center, Heading } from 'native-base';
import Animated, {} from 'react-native-reanimated';

const AnimatedCenter = Animated.createAnimatedComponent(Center);

const SectionTitle = ({ title }) => {

    if(!title){
        title = "Title";
    }

    return (
        <AnimatedCenter
            textAlign={"center"}
            size={"100%"}
            bgColor={"darkBlue.900"}
        >
            <Heading
                color={"green.500"}
                size={"4xl"}
            >
                {"\u300E" + title + "\u300F"}
            </Heading>
        </AnimatedCenter>
    );
};

export default SectionTitle;