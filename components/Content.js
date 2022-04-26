import React from 'react';
import { useWindowDimensions } from 'react-native';
import { VStack, Icon, Text, HStack } from 'native-base';

const Content = ({ paragraphs }) => {

    const screenSize = useWindowDimensions();

    return (
        <VStack w={screenSize.width} h={screenSize.height} p={"5%"} bgColor={"darkBlue.900"} space={5} >
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

export default Content;