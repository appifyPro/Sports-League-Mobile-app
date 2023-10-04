import React from 'react';
import { SvgXml } from 'react-native-svg';

const Share = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 7L11 0V4C4 5 1 10 0 15C2.5 11.5 6 9.9 11 9.9V14L18 7Z" fill="white"/>
            </svg>
            `}
        />
    );
};

export default Share;
