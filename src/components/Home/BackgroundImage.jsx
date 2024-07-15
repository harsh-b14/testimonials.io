// BackgroundImage.js

import React from 'react';

const BackgroundImage = ({ children }) => {
    return (
        <div className="bg-[url('../../public/BgImage.svg')] bg-cover bg-center h-screen">
            {children}
        </div>
    );
};

export default BackgroundImage;
