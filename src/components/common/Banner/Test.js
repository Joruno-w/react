import React from 'react';
import Banner from "./index";
import src1 from './img/1.jpg';
import src2 from './img/2.jpg';
import src3 from './img/3.jpg';
import src4 from './img/4.webp';
import src5 from './img/5.webp';
function Test() {
    return (
        <Banner imgSrcs={[src1,src2,src3,src4,src5]} duration={500} />
    );
}

export default Test;
