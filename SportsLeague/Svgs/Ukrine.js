import React from 'react';
import { SvgXml } from 'react-native-svg';

const Ukrine = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_70_192)">
            <path d="M17.7778 2.77783H2.22222C1.63285 2.77783 1.06762 3.01196 0.650874 3.42871C0.234126 3.84545 0 4.41068 0 5.00005L0 10.0001H20V5.00005C20 4.41068 19.7659 3.84545 19.3491 3.42871C18.9324 3.01196 18.3671 2.77783 17.7778 2.77783Z" fill="#005BBB"/>
            <path d="M20 15C20 15.5894 19.7659 16.1546 19.3491 16.5713C18.9324 16.9881 18.3671 17.2222 17.7778 17.2222H2.22222C1.63285 17.2222 1.06762 16.9881 0.650874 16.5713C0.234126 16.1546 0 15.5894 0 15V10H20V15Z" fill="#FFD500"/>
            </g>
            <defs>
            <clipPath id="clip0_70_192">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            
            `}
        />
    );
};

export default Ukrine;
