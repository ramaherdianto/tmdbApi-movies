import React from 'react';

const NumResults = ({ movies }) => {
    return (
        <>
            <span className='text-slate-300 text-lg'>
                Found <span className='font-semibold text-white'>{movies.length}</span> Result
            </span>
        </>
    );
};

export default NumResults;
