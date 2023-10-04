import React from 'react';
import { SvgXml } from 'react-native-svg';

const Down = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#D9D9D9" fill-opacity="0.3"/>
            <path d="M10.3033 11.1248L14.4281 7L15.6066 8.17851L10.3033 13.4819L5 8.17851L6.17852 7L10.3033 11.1248Z" fill="black"/>
            </svg>
            `}
        />
    );
};

export default Down;
