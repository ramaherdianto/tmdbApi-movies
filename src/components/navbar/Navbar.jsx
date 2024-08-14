import React from 'react';
import Logo from './Logo';
import Search from './Search';
import NumResults from './NumResults';
import SearchMobile from './SearchMobile';

const Navbar = () => {
    return (
        <>
            <nav className='bg-navbar flex flex-col md:flex-row justify-center p-4 gap-8'>
                <section className='max-w-7xl w-full flex justify-between items-center'>
                    <Logo />
                    <Search />
                    <NumResults />
                </section>
                <SearchMobile />
            </nav>
        </>
    );
};

export default Navbar;
