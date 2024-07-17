import React from 'react';

const BackgroundImage = ({ children }) => {
    return (
        <div className="bg-[url('../../../BgImage.svg')] bg-cover bg-center h-full">
            {children}
        </div>
    );
};

export default BackgroundImage;
