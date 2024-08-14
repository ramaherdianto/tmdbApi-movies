import React from 'react';
import Summary from './Summary';
import WatchedItem from './WatchedItem';
import BoxMovies from '../BoxMovies';

const WatchedMovies = () => {
    return (
        <>
            <BoxMovies boxTitle={'Movies You Watched'}>
                <Summary />
                <section className='mt-5 py-2'>
                    <WatchedItem />
                </section>
            </BoxMovies>
        </>
    );
};

export default WatchedMovies;
