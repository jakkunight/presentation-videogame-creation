import { Dimensions } from "react-native";

const screenSize = Dimensions.get("screen");

const INITIAL = {};
const EXIT = {};
const ANIMATE = {};

INITIAL.Fade = {
    opacity: 0
};
EXIT.Fade = {};
ANIMATE.Fade = {
    opacity: 1,
    transition: {
        duration: 2000
    }
};
INITIAL.SlideToRight = {
    translateX: -screenSize.width
};
EXIT.SlideToRight = {};
ANIMATE.SlideToRight = {
    translateX: 0,
    transition: {
        duration: 2000
    }
};
INITIAL.SlideToLeft = {
    translateX: screenSize.width
};
EXIT.SlideToLeft = {};
ANIMATE.SlideToLeft = {
    translateX: 0,
    transition: {
        duration: 2000
    }
};
INITIAL.SlideToUp = {
    translateY: -screenSize.height
};
EXIT.SlideToUp = {};
ANIMATE.SlideToUp = {
    translateY: 0,
    transition: {
        duration: 2000
    }
};
INITIAL.SlideToDown = {
    translateY: screenSize.height
};
EXIT.SlideToDown = {};
ANIMATE.SlideToDown = {
    translateY: 0,
    transition: {
        duration: 2000
    }
};
INITIAL.RotateClockwise = {
    rotate: "0deg"
};
EXIT.RotateClockwise = {};
ANIMATE.RotateClockwise = {
    rotation: "-360deg",
    transition: {
        duration: 2000
    }
};
INITIAL.RotateCounterClockwise = {
    rotate: "0deg"
};
EXIT.RotateCounterClockwise = {};
ANIMATE.RotateCounterClockwise = {
    rotation: "360deg",
    transition: {
        duration: 2000
    }
};
INITIAL.Zoom = {
    scale: 0
};
EXIT.Zoom = {};
ANIMATE.Zoom = {
    scale: 1,
    transition: {
        duration: 2000
    }
};

export { INITIAL, EXIT, ANIMATE };