import React from 'react';
import { SvgXml } from 'react-native-svg';

const Home = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.2273 29.6681C30.2273 30.5468 29.515 31.259 28.6364 31.259H6.36364C5.48501 31.259 4.77273 30.5468 4.77273 29.6681V15.3499H0L16.4298 0.413724C17.0366 -0.137908 17.9634 -0.137908 18.5702 0.413724L35 15.3499H30.2273V29.6681Z" fill=${defaultColor} fill-opacity="1" />
        </svg>
            `}
        />
    );
};

export default Home;
