import React from 'react';
import { SvgXml } from 'react-native-svg';

const Facebook = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.1528 12.5764C25.1528 5.63069 19.5221 0 12.5764 0C5.63069 0 0 5.63059 0 12.5764C0 18.8536 4.59903 24.0566 10.6113 25V16.2118H7.41811V12.5764H10.6113V9.80566C10.6113 6.6537 12.4889 4.91265 15.3616 4.91265C16.7376 4.91265 18.1768 5.15829 18.1768 5.15829V8.25326H16.591C15.0286 8.25326 14.5415 9.22272 14.5415 10.2173V12.5764H18.0294L17.4719 16.2118H14.5415V25C20.5538 24.0566 25.1528 18.8537 25.1528 12.5764Z" fill="white" />
        </svg>`}
        />
    );
};

export default Facebook;
