import React from 'react';
import Logo from './Logo';
import Search from './Search';
import NumResults from './NumResults';
import SearchMobile from './SearchMobile';

const Navbar = () => {
    return (
        <>
            <nav className='flex flex-col max-w-7xl md:flex-row justify-center mx-auto shadow-[0px_20px_33px_-8px_rgba(0,0,0,0.49)] rounded-xl'>
                <section className='bg-navbar py-4 px-4 md:px-8 w-full flex flex-col md:flex-row justify-between items-center rounded-xl gap-8 md:gap-0'>
                    <section className='w-full flex justify-between items-center'>
                        <Logo />
                        <Search />
                        <NumResults />
                    </section>
                    <SearchMobile />
                </section>
            </nav>
        </>
    );
};

export default Navbar;
