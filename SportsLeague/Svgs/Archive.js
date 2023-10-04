import React from 'react';
import { SvgXml } from 'react-native-svg';

const Archive = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 10.6H12.4M1 1H17.8V5.8H1V1ZM2.2 5.8V16.6C2.2 16.9183 2.32643 17.2235 2.55147 17.4485C2.77652 17.6736 3.08174 17.8 3.4 17.8H15.4C15.7183 17.8 16.0235 17.6736 16.2485 17.4485C16.4736 17.2235 16.6 16.9183 16.6 16.6V5.8H2.2Z" stroke="black" />
        </svg>
            `}
        />
    );
};

export default Archive;
