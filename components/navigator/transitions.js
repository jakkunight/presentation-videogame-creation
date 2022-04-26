import { Dimensions } from "react-native";

const screenSize = Dimensions.get("window");

const INITIAL = {};
const EXIT = {};
const ANIMATE = {};

INITIAL.Fade = {
    opacity: 0
};
EXIT.Fade = {
    opacity: 0
};
ANIMATE.Fade = {
    opacity: 1,
    transition: {
        useNativeDriver: false,
        duration: 2000
    }
};
INITIAL.SlideToRight = {
    translateX: -screenSize.width
};
EXIT.SlideToRight = {
    translateX: screenSize.width
};
ANIMATE.SlideToRight = {
    translateX: 0,
    transition: {
        useNativeDriver: false,
        duration: 2000
    }
};
INITIAL.SlideToLeft = {
    translateX: screenSize.width
};
EXIT.SlideToLeft = {
    translateX: -screenSize.width
};
ANIMATE.SlideToLeft = {
    translateX: 0,
    transition: {
        useNativeDriver: false,
        duration: 2000
    }
};
INITIAL.SlideToUp = {
    translateY: -screenSize.height
};
EXIT.SlideToUp = {
    translateY: screenSize.height
};
ANIMATE.SlideToUp = {
    translateY: 0,
    transition: {
        useNativeDriver: false,
        duration: 2000
    }
};
INITIAL.SlideToDown = {
    translateY: screenSize.height
};
EXIT.SlideToDown = {
    translateY: -screenSize.height
};
ANIMATE.SlideToDown = {
    translateY: 0,
    transition: {
        useNativeDriver: false,
        duration: 2000
    }
};
INITIAL.RotateClockwise = {
    rotate: "0deg"
};
EXIT.RotateClockwise = {
    rotate: "0deg"
};
ANIMATE.RotateClockwise = {
    rotation: "-360deg",
    transition: {
        useNativeDriver: false,
        duration: 2000
    }
};
INITIAL.RotateCounterClockwise = {
    rotate: "0deg"
};
EXIT.RotateCounterClockwise = {
    rotate: "0deg"
};
ANIMATE.RotateCounterClockwise = {
    rotation: "360deg",
    transition: {
        useNativeDriver: false,
        duration: 2000
    }
};
INITIAL.Zoom = {
    scale: 0
};
EXIT.Zoom = {
    scale: 0
};
ANIMATE.Zoom = {
    scale: 1,
    transition: {
        useNativeDriver: false,
        duration: 2000
    }
};

export { INITIAL, EXIT, ANIMATE };