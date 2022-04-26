import React, { useContext, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Center, PresenceTransition } from 'native-base';
import Router from './Router';
import { TapGestureHandler } from 'react-native-gesture-handler';

const Screen = ({ children, initial, animate, exit, id, next, prev }) => {

    const context = useContext(Router);
    const screenSize = useWindowDimensions();

    useEffect(() => {
        console.log("Screen:", id, "Status:", context.screens[id]);
    }, []);

    return (
        <PresenceTransition initial={initial} animate={animate} exit={exit} visible={context.screens[id]} >
            <TapGestureHandler
                onActivated={({ nativeEvent }) => {
                    if (nativeEvent.x > screenSize.width / 2) {
                        console.log("Tap event on screen", id);
                        context.navigate(next);
                    } else {
                        console.log("Tap event on screen", id);
                        context.navigate(prev);
                    }
                }}
            >
                <Center
                    w={screenSize.width}
                    h={screenSize.height}
                    position={"fixed"}
                    top={0}
                    left={0}
                >
                    {children}
                </Center>
            </TapGestureHandler>
        </PresenceTransition>
    );
};

export default Screen;