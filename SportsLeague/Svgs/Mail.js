import React from 'react';
import { SvgXml } from 'react-native-svg';

const Mail = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 15;
    const defaultWidth = width ? width : 15;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 0H16C16.7956 0 17.5587 0.316071 18.1213 0.87868C18.6839 1.44129 19 2.20435 19 3V12C19 12.7956 18.6839 13.5587 18.1213 14.1213C17.5587 14.6839 16.7956 15 16 15H3C2.20435 15 1.44129 14.6839 0.87868 14.1213C0.316071 13.5587 0 12.7956 0 12V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0ZM3 1C2.5 1 2.06 1.17 1.72 1.47L9.5 6.5L17.28 1.47C16.94 1.17 16.5 1 16 1H3ZM9.5 7.71L1.13 2.28C1.05 2.5 1 2.75 1 3V12C1 12.5304 1.21071 13.0391 1.58579 13.4142C1.96086 13.7893 2.46957 14 3 14H16C16.5304 14 17.0391 13.7893 17.4142 13.4142C17.7893 13.0391 18 12.5304 18 12V3C18 2.75 17.95 2.5 17.87 2.28L9.5 7.71Z" fill="black" />
        </svg>
            `}
        />
    );
};

export default Mail;
