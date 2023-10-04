import React from 'react';
import { SvgXml } from 'react-native-svg';

const CircleProfile = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#D9D9D9"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8889 21.1111C22.8889 19.2251 23.6381 17.4164 24.9717 16.0828C26.3053 14.7492 28.114 14 30 14C31.886 14 33.6947 14.7492 35.0283 16.0828C36.3619 17.4164 37.1111 19.2251 37.1111 21.1111C37.1111 22.9971 36.3619 24.8058 35.0283 26.1394C33.6947 27.473 31.886 28.2222 30 28.2222C28.114 28.2222 26.3053 27.473 24.9717 26.1394C23.6381 24.8058 22.8889 22.9971 22.8889 21.1111ZM22.8889 31.7778C20.5314 31.7778 18.2705 32.7143 16.6035 34.3813C14.9365 36.0483 14 38.3092 14 40.6667C14 42.0812 14.5619 43.4377 15.5621 44.4379C16.5623 45.4381 17.9188 46 19.3333 46H40.6667C42.0812 46 43.4377 45.4381 44.4379 44.4379C45.4381 43.4377 46 42.0812 46 40.6667C46 38.3092 45.0635 36.0483 43.3965 34.3813C41.7295 32.7143 39.4686 31.7778 37.1111 31.7778H22.8889Z" fill="black" fill-opacity="0.3"/>
            </svg>
        `}
        />
    );
};

export default CircleProfile;
