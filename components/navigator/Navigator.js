import React, { useState, Children, useEffect } from 'react';
import Router from './Router';

const Navigator = ({ children, homeScreenId }) => {

    const [ activeScreen, setActiveScreen ] = useState(homeScreenId);
    const loadScreens = () => {
        let components = Children.toArray(children);
        let aux = [];
        for(let i = 0; i < components.length; i++){
            if(i !== activeScreen){
                aux = [...aux, false];
            }else{
                aux = [...aux, true];
            }
        }
        return aux;
    };
    const [ screens, setScreens ] = useState(loadScreens());
    const navigate = async (screenId) => {
        let aux = screens;
        aux[activeScreen] = false;
        aux[screenId] = true;
        setActiveScreen(screenId);
        setScreens(aux);
    };
    useEffect(() => {
        setScreens(loadScreens());
        console.log("Navigator Screens:", screens);
    }, []);
    const data = {
        navigate,
        screens,
        activeScreen
    };

    return (
        <Router.Provider value={data} >
            {children}
        </Router.Provider>
    );
};

export default Navigator;