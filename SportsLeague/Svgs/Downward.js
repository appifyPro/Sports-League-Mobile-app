import React from 'react';
import { SvgXml } from 'react-native-svg';

const Downward = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 6;
    const defaultWidth = width ? width : 12;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0H12L6 6Z" fill="#2445F6"/>
            </svg>        
        `}
        />
    );
};

export default Downward;
