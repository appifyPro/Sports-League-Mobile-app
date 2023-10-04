import React from 'react';
import { SvgXml } from 'react-native-svg';

const Chief = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width=${defaultWidth} height=${defaultHeight} fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_480_51" transform="scale(0.00195312)"/>
            </pattern>
            <image id="image0_480_51" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeAHt3fnTHPV9J3DV/hG7lf0LAnFixxiMt2qzVK0rGJRgBxNfcQgQHK+zWdY4jlmS3cTr5RTCYCRxg4U4zI3BYGyQBJKQOHSgW0hISEKg+0LSD0ll1731UdXYD8Mc3+numenpfrnq8YPmeWaemdf33d3v6enu77Rp/keAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBBoikGX/5j/c8NLHzpix7E/PnLH4e6V8zVx8+R/cuOzCs296ffr0W5Z/1hcDGZABGZABGcifgc/duvL3zrv5tX9XSjM5Y+Yrl3/y+kUbf+fqBf/vt6+anxX9OuXqBdkZMxZnZ938anbO7OXZubNX+GIgAzIgAzIgA2VmYNaK3efOXnn7H81aftbAZeAzN7zytY9f+9Lhohv81v1PuWp+dsYNS7Kzb7HRV3qUPhmQARmQgZFlYM7KF8+d88YnkorAGdcvmnvKVQsKv9v/9cb/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IECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDD5Av8fyTOof0MJK14AAAAASUVORK5CYII="/>
            </defs>
            </svg>
            `
            }
        />
    );
};

export default Chief;
