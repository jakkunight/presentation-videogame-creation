import React, { createContext, useEffect, useState, Children } from 'react';
import { Center } from 'native-base';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import Router from './Router';

const Navigator = ({ children }) => {

    const [ active, setActive ] = useState(0);

    const navigate = async (screen_id) => {
        setActive(screen_id);
    };

    const data = {
        setActive,
        active
    };

    return (
        <Router.Provider value={data} >
            {
                Children.map(children, (child, index) => {
                    if(index === active){
                        return (
                            <Animated.View
                                entering={FadeIn}
                                exiting={FadeOut}
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}
                            >
                                { child.type() }
                            </Animated.View>
                        );
                    }
                })
            }
        </Router.Provider>
    );
};

export { Navigator, Router };