import React from 'react';
import Button from '../button/Button';

const Search = () => {
    return (
        <>
            <form className={`hidden gap-6 md:flex`} action=''>
                <input
                    placeholder='Search...'
                    className='w-96 rounded-lg bg-sidebar border-sidebar text-slate-400 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    type='text'
                />
                <Button>Search</Button>
            </form>
        </>
    );
};

export default Search;
