import React from 'react';
import { useWindowDimensions } from 'react-native';
import { VStack, Icon, Text, HStack } from 'native-base';

const Content = ({ paragraphs }) => {

    const screenSize = useWindowDimensions();

    return (
        <VStack w={screenSize.width} h={screenSize.height} bgColor={"darkBlue.900"} >
            {
                paragraphs.map((paragraph, key) => {
                    return (
                        <HStack key={key} space={5} >
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

export default Content;