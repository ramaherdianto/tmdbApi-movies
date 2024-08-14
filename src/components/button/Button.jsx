import React from 'react';

const Button = ({ children, bgColor = 'primary', textColor = 'white', px = '4', py = '2' }) => {
    return (
        <>
            <button className={`py-${py} px-${px} rounded-xl bg-${bgColor} text-${textColor}`}>
                {children}
            </button>
        </>
    );
};

export default Button;
