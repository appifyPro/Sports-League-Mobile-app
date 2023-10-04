import React from 'react';
import { SvgXml } from 'react-native-svg';

const Search = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9702 25.4793C20.1099 27.7013 16.5103 28.7495 12.9043 28.4105C9.2983 28.0716 5.95706 26.371 3.5609 23.6551C1.16474 20.9391 -0.10617 17.412 0.00695223 13.7919C0.120075 10.1717 1.60872 6.73084 4.16978 4.16978C6.73084 1.60872 10.1717 0.120075 13.7919 0.00695223C17.412 -0.10617 20.9391 1.16474 23.6551 3.5609C26.371 5.95706 28.0716 9.2983 28.4105 12.9043C28.7495 16.5103 27.7013 20.1099 25.4793 22.9702L35 32.4552L32.473 34.9822L22.988 25.4793H22.9702ZM14.2503 24.9099C15.6525 24.9099 17.0409 24.6337 18.3364 24.0971C19.6318 23.5605 20.8089 22.774 21.8003 21.7826C22.7918 20.7911 23.5783 19.614 24.1149 18.3186C24.6515 17.0231 24.9277 15.6347 24.9277 14.2325C24.9277 12.8303 24.6515 11.4419 24.1149 10.1465C23.5783 8.85101 22.7918 7.67395 21.8003 6.68246C20.8089 5.69097 19.6318 4.90448 18.3364 4.3679C17.0409 3.83131 15.6525 3.55513 14.2503 3.55513C11.4185 3.55513 8.70265 4.68006 6.70026 6.68246C4.69786 8.68486 3.57293 11.4007 3.57293 14.2325C3.57293 17.0643 4.69786 19.7802 6.70026 21.7826C8.70265 23.7849 11.4185 24.9099 14.2503 24.9099Z" fill=${defaultColor} fill-opacity="1" />
        </svg>
            `}
        />
    );
};

export default Search;