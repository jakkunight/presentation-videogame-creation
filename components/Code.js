import React from 'react';
import { useWindowDimensions } from 'react-native';
import { VStack, Text, HStack, Box } from 'native-base';

const Code = ({ lines }) => {

    const screenSize = useWindowDimensions();

    return (
        <VStack w={screenSize.width} h={screenSize.height} bgColor={"darkBlue.900"} >
            {
                lines.map((line, key) => {
                    <HStack space={2} key={key} >
                        <Box w={"5%"} textAlign={"center"} >
                            <Text color={"green.500"} >
                                {key}
                            </Text>
                        </Box>
                        <Text color={"white"} >
                            {line}
                        </Text>
                    </HStack>
                })
            }
        </VStack>
    );
};

export default Code;