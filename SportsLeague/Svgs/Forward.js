import React from 'react';
import { SvgXml } from 'react-native-svg';

const Forward = ({ height, width, color }) => {
    const defaultColor = color ? color : "white";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.1714 7.0007L0.22168 2.05093L1.63589 0.636719L7.9999 7.0007L1.63589 13.3646L0.22168 11.9504L5.1714 7.0007Z" fill=${defaultColor} fill-opacity="1"/>
</svg>
`}
        />
    );
};

export default Forward;