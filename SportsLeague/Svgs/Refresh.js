import React from 'react';
import { SvgXml } from 'react-native-svg';

const Refresh = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.7692C21 16.3846 17.1538 21.7692 11 21.7692C4.84615 21.7692 1 16.3846 1 11.7692C1 7.15385 4.84615 1.76923 11 1.76923C14.8462 1.76923 17.9231 4.07692 19.4615 6.38462M19.4615 6.38462L14.0769 7.15385M19.4615 6.38462L20.2308 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `}
        />
    );
};

export default Refresh;
