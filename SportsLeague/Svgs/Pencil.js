import React from 'react';
import { SvgXml } from 'react-native-svg';

const Pencil = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8824 4.93801L20.9412 8.99683M14.1765 23.8792H25M3.35294 18.4674L2 23.8792L7.41176 22.5262L23.0869 6.85107C23.5942 6.34364 23.8792 5.65551 23.8792 4.93801C23.8792 4.22051 23.5942 3.53238 23.0869 3.02495L22.8542 2.79225C22.3468 2.28497 21.6587 2 20.9412 2C20.2237 2 19.5355 2.28497 19.0281 2.79225L3.35294 18.4674Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
            `}
        />
    );
};

export default Pencil;
