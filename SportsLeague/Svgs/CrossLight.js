import React from 'react';
import { SvgXml } from 'react-native-svg';

const CrossLight = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 15;
    const defaultWidth = width ? width : 15;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 14.1075L7.55375 7.55375L14.1075 14.1075M14.1075 1L7.5525 7.55375L1 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `}
        />
    );
};

export default CrossLight;
