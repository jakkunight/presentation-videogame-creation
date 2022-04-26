import React from 'react';
import { Center, Heading } from 'native-base';

const SectionTitle = ({ title }) => {

    if(!title){
        title = "Title";
    }

    return (
        <Center
            textAlign={"center"}
            w={screenSize.width}
            h={screenSize.height}
            bgColor={"darkBlue.900"}
        >
            <Heading
                color={"green.500"}
                size={"4xl"}
            >
                {"\u300E" + title + "\u300F"}
            </Heading>
        </Center>
    );
};

export default SectionTitle;