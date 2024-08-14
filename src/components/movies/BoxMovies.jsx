import React, { useState } from 'react';
import Button from '../button/Button';

const BoxMovies = ({ children, boxTitle }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <section
            className={`bg-navbar w-full md:w-1/2 max-w-1/2 relative rounded-xl transition-all duration-500 ease-in-out shadow-[0px_20px_33px_-8px_rgba(0,0,0,0.49)] ${
                isOpen ? 'py-4 overflow-y-scroll h-[42rem]' : 'h-[3.3rem] flex items-center p-4'
            }`}
        >
            <Button
                className={`w-[2em] h-[2em] z-20 ${
                    isOpen ? 'bg-[#24323F]' : 'bg-sidebar'
                } text-lg font-bold bg-navbar rounded-full text-primary absolute right-2 top-2`}
                onClick={handleOpen}
            >
                {isOpen ? '-' : '+'}
            </Button>
            {!isOpen && (
                <h3 className='text-xl text-slate-200 font-semibold uppercase'>{boxTitle}</h3>
            )}
            {isOpen && <>{children}</>}
        </section>
    );
};

export default BoxMovies;
