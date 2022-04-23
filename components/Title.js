import React from 'react';
import { Center, Heading } from 'native-base';
import Animated, {
    SlideOutRight,
    Layout
} from 'react-native-reanimated';

/* 
    We have three "events" or "states" for the animated components in general:
        1 - The "Creation" (First render) Referenced by entering prop.
        2 - The "Modification" (Re-render, but still existing) Referenced by layout prop.
        3 - The "Destruction" (Last render, but doesn't exists anymore) Referenced by exiting prop.
*/

const AnimatedCenter = Animated.createAnimatedComponent(Center);

const Title = ({ title, subtitle }) => {

    if(!title){
        title = "Title"
    }
    if(!subtitle){
        subtitle = "Subtitle"
    }

    return (
        <AnimatedCenter
            size={"100%"}
            textAlign={"center"}
            bgColor={"darkBlue.900"}
            exiting={SlideOutRight}
            layout={Layout.springify()}
        >
            <Heading color={"green.500"} size={"4xl"} >
                {"\u300E" + title + "\u300F"}
            </Heading>
            <Heading color={"white"} size={"xl"} >
                {"\u300C" + subtitle + "\u300D"}
            </Heading>
        </AnimatedCenter>
    );
};

export default Title;