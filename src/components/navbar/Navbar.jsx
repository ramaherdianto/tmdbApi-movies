import React from 'react';
import Logo from './Logo';
import Search from './Search';
import NumResults from './NumResults';
import SearchMobile from './SearchMobile';

const Navbar = () => {
    return (
        <>
            <nav className='flex flex-col max-w-7xl md:flex-row justify-center mx-auto'>
                <section className='bg-navbar p-4 w-full flex flex-col md:flex-row justify-between items-center rounded-xl gap-8 md:gap-0'>
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
