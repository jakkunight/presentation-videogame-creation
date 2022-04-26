import React from 'react';
import { useWindowDimensions } from 'react-native';
import { VStack, HStack, Icon, Text, Heading, Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const TitleContent = ({ title, paragraphs }) => {

    const screenSize = useWindowDimensions();

    return (
        <VStack w={screenSize.width} h={screenSize.height} bgColor={"darkBlue.900"} >
            <Box>
                <Heading size={"2xl"} color={"green.500"} >
                    {title}
                </Heading>
            </Box>
            {
                paragraphs.map((paragraph, key) => {
                    return (
                        <HStack key={key} >
                            <Icon
                                as={Entypo}
                                name={"moon"}
                                color={"yellow.400"}
                                size={"lg"}
                            />
                            <Text size={"20pt"} color={"white"} >
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