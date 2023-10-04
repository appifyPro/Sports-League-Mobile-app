import React from 'react';
import { SvgXml } from 'react-native-svg';

const AddProfile = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1579 17.4368V27.6316H0C0 21.818 4.71279 17.1053 10.5263 17.1053C11.435 17.1053 12.3168 17.2204 13.1579 17.4368ZM10.5263 15.7895C6.16447 15.7895 2.63158 12.2566 2.63158 7.89474C2.63158 3.53289 6.16447 0 10.5263 0C14.8882 0 18.4211 3.53289 18.4211 7.89474C18.4211 12.2566 14.8882 15.7895 10.5263 15.7895ZM18.4211 21.0526V17.1053H21.0526V21.0526H25V23.6842H21.0526V27.6316H18.4211V23.6842H14.4737V21.0526H18.4211Z" fill="white"/>
            </svg>           
            `}
        />
    );
};

export default AddProfile;
