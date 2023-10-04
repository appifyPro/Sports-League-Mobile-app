import React from 'react';
import { SvgXml } from 'react-native-svg';

const Backward = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5355 7.95497L9.72275 14.1421L7.955 15.9098L0 7.95497L7.955 0L9.72275 1.76776L3.5355 7.95497Z" fill="black" />
        </svg>`}
        />
    );
};

export default Backward;
