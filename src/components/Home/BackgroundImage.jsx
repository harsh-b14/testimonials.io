import React from 'react';

const BackgroundImage = ({ children }) => {
    return (
        <div className="bg-[url('../../../img.svg')] bg-cover bg-center h-full">
            {children}
        </div>
    );
};

export default BackgroundImage;
