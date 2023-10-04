import React from 'react';
import { SvgXml } from 'react-native-svg';

const Select = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" stroke="#2445F6" stroke-width="2" />
            <circle cx="10" cy="10" r="5" fill="#2445F6" />
        </svg>
            `}
        />
    );
};

export default Select;
