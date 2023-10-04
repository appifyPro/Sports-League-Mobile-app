import React from 'react';
import { SvgXml } from 'react-native-svg';

const Cross = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 3.03125L13.6354 0L8.33333 5.30208L3.03125 0L0 3.03125L5.30208 8.33333L0 13.6354L3.03125 16.6667L8.33333 11.3646L13.6354 16.6667L16.6667 13.6354L11.3646 8.33333L16.6667 3.03125Z" fill="black"/>
            </svg>`
            }
        />
    );
};

export default Cross;
