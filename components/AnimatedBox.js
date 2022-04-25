// Just a testing file. Ignore it, but don't delete it.
import React, { useState } from 'react';
import { Center, Text, Input, Button } from 'native-base';
import Animated, { SlideInRight } from 'react-native-reanimated';

const AnimatedCenter = Animated.createAnimatedComponent(Center);

const Card = ({ name, age, personality }) => {
    return (
        <Animated.View bgColor={"white"} entering={SlideInRight} >
            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>Personality: {personality}</Text>
        </Animated.View>
    );
};

const AnimatedBox = () => {

    const data = [
        {
            name: "John the Ripper",
            age: 30,
            personality: "Evil"
        },
        {
            name: "Cain&Abel",
            age: 15,
            personality: "Croocked"
        },
        {
            name: "Hydra",
            age: 20,
            personality: "Respectable"
        },
        {
            name: "Kali",
            age: 100,
            personality: "GOD"
        }
    ];

    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState(0);
    const [inputPersonality, setInputPersonality] = useState("");
    const [list, setList] = useState(data);

    const addProgram = () => {
        setList([...list, {
            name: inputName,
            age: inputAge,
            personality: inputPersonality
        }]);
    };
    const removeProgram = () => {
        setList(list.filter((program) => program.name !== inputName && program.age !== inputAge && program.personality !== inputPersonality));
    };

    return (
        <Center size={"100%"} bgColor={"#AAAAAA"} >
            <Text> Program List: </Text>
            {
                list.map((item, key) => {
                    const {
                        name,
                        age,
                        personality
                    } = item;
                    return (
                        <Card key={key} name={name} age={age} personality={personality} />
                    );
                })
            }
            <Text> Add/Remove Program: </Text>
            <Input type={"text"} placeholder={"Name"} placeholderTextColor={"black"} onChangeText={(text) => {setInputName(text)}} />
            <Input type={"text"} placeholder={"Age"} placeholderTextColor={"black"} onChangeText={(text) => {setInputAge(text)}} />
            <Input type={"text"} placeholder={"Personality"} placeholderTextColor={"black"} onChangeText={(text) => {setInputPersonality(text)}} />
            <Button onPress={addProgram} >Add</Button>
            <Button onPress={removeProgram} >Remove</Button>
        </Center>
    );
};

export default AnimatedBox;
