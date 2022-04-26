import React from 'react';
import { useWindowDimensions } from 'react-native';
import { VStack, HStack, Icon, Text, Heading, Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const TitleContent = ({ title, paragraphs }) => {

    const screenSize = useWindowDimensions();

    return (
        <VStack w={screenSize.width} h={screenSize.height} p={"5%"} bgColor={"darkBlue.900"} space={5} >
            <Box>
                <Heading fontSize={"6xl"} color={"green.500"} >
                    {title}
                </Heading>
            </Box>
            {
                paragraphs.map((paragraph, key) => {
                    return (
                        <HStack key={key} space={5} >
                            <Icon
                                as={Entypo}
                                name={"game-controller"}
                                color={"primary.400"}
                                size={"2xl"}
                            />
                            <Text fontSize={"2xl"} color={"white"} >
                                {paragraph}
                            </Text>
                        </HStack>
                    );
                })
            }
        </VStack>
    );
};

export default TitleContent;