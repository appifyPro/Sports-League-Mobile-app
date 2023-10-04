import React from 'react';
import { SvgXml } from 'react-native-svg';

const Rules = ({ height, width, color }) => {
    const defaultColor = color ? color : "grey";
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 14.375V11.5H17.25V14.375H5.75ZM5.75 8.625V5.75H17.25V8.625H5.75ZM2.875 17.25H13.6562C14.351 17.25 14.9979 17.4 15.5969 17.6999C16.1958 17.9999 16.699 18.4249 17.1062 18.975L20.125 22.9281V2.875H2.875V17.25ZM2.875 25.875H18.7594L14.8422 20.7359C14.6984 20.5443 14.525 20.3943 14.3218 20.286C14.1186 20.1777 13.8968 20.124 13.6562 20.125H2.875V25.875ZM20.125 28.75H2.875C2.08438 28.75 1.40731 28.4682 0.843815 27.9047C0.280315 27.3412 -0.000955892 26.6647 2.44058e-06 25.875V2.875C2.44058e-06 2.08438 0.281752 1.40731 0.845252 0.843815C1.40875 0.280315 2.08534 -0.000955892 2.875 2.44058e-06H20.125C20.9156 2.44058e-06 21.5927 0.281752 22.1562 0.845252C22.7197 1.40875 23.001 2.08534 23 2.875V25.875C23 26.6656 22.7182 27.3427 22.1547 27.9062C21.5912 28.4697 20.9147 28.751 20.125 28.75Z" fill="black" />
        </svg>
            `}
        />
    );
};

export default Rules;
