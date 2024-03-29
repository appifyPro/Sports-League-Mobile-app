import React from 'react';
import { SvgXml } from 'react-native-svg';

const Add = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7143 10.7143V0H14.2857V10.7143H25V14.2857H14.2857V25H10.7143V14.2857H0V10.7143H10.7143Z" fill="white"/>
            </svg>            
            `}
        />
    );
};

export default Add;
