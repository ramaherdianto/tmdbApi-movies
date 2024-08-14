import React from 'react';
import LogoSvg from '/public/logo.svg';

const Logo = () => {
    return (
        <>
            <section>
                <img src={LogoSvg} alt='TMDb Logo' width={55} height={52} />
            </section>
        </>
    );
};

export default Logo;
