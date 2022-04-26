import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Center, Heading } from 'native-base';

/* 
    We have three "events" or "states" for the animated components in general:
        1 - The "Creation" (First render) Referenced by entering prop.
        2 - The "Modification" (Re-render, but still existing) Referenced by layout prop.
        3 - The "Destruction" (Last render, but doesn't exists anymore) Referenced by exiting prop.
*/

const Title = ({ title, subtitle }) => {

    if(!title){
        title = "Title"
    }
    if(!subtitle){
        subtitle = "Subtitle"
    }

    const screenSize = useWindowDimensions();

    return (
        <Center
            w={screenSize.width}
            h={screenSize.height}
            textAlign={"center"}
            bgColor={"darkBlue.900"}
        >
            <Heading color={"green.500"} size={"4xl"} >
                {"\u300E" + title + "\u300F"}
            </Heading>
            <Heading color={"white"} size={"xl"} >
                {"\u300C" + subtitle + "\u300D"}
            </Heading>
        </Center>
    );
};

export default Title;