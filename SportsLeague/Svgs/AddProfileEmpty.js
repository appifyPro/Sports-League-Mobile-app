import React from 'react';
import { SvgXml } from 'react-native-svg';

const AddProfileEmpty = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1053 16.0419V18.5712C11.348 18.3035 10.5332 18.1579 9.68421 18.1579C5.67288 18.1579 2.42105 21.4097 2.42105 25.4211H0C0 20.0726 4.33577 15.7368 9.68421 15.7368C10.5202 15.7368 11.3315 15.8428 12.1053 16.0419ZM9.68421 14.5263C5.67132 14.5263 2.42105 11.2761 2.42105 7.26316C2.42105 3.25026 5.67132 0 9.68421 0C13.6971 0 16.9474 3.25026 16.9474 7.26316C16.9474 11.2761 13.6971 14.5263 9.68421 14.5263ZM9.68421 12.1053C12.3595 12.1053 14.5263 9.93842 14.5263 7.26316C14.5263 4.58789 12.3595 2.42105 9.68421 2.42105C7.00895 2.42105 4.84211 4.58789 4.84211 7.26316C4.84211 9.93842 7.00895 12.1053 9.68421 12.1053ZM16.9474 19.3684V15.7368H19.3684V19.3684H23V21.7895H19.3684V25.4211H16.9474V21.7895H13.3158V19.3684H16.9474Z" fill="black" />
        </svg>
            `}
        />
    );
};

export default AddProfileEmpty;
