import React from 'react';
import { SvgXml } from 'react-native-svg';

const PickSummary = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.27557 6.58245L1.65847 8.22806H0.334265L3.41979 0H4.73113L7.81666 8.22806H6.49245L5.87535 6.58245H2.27557ZM4.07546 1.76132L2.89268 4.93684H5.25824L4.07546 1.76132ZM4.89827 19.8245L6.99385 17.7289L8.15092 18.886L4.07546 22.9614L0 18.886L1.15707 17.7289L3.25266 19.8245V9.87367H4.89827V19.8245ZM11.4807 0H23V1.64561H11.4807V0ZM11.4807 8.22806V6.58245H23V8.22806H11.4807ZM11.4807 14.8105V13.1649H23V14.8105H11.4807ZM11.4807 21.393V19.7473H23V21.393H11.4807Z" fill="black" />
        </svg>
            `}
        />
    );
};

export default PickSummary;
