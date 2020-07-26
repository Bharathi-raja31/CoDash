import * as React from 'react';

// Image
const preLoader = require('../assets/img/preloader.gif');

const Loader = () => (
    <div className="preloader">
        <img alt="preloader" src={preLoader} />
    </div>
);

export default Loader;
