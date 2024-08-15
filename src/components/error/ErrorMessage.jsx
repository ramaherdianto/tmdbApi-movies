import React from 'react';

const ErrorMessage = ({ errorMessage }) => {
    return (
        <>
            <div className='flex flex-col gap-4 items-center justify-center text-center'>
                <span className='text-[2em]'>⛔</span>{' '}
                <span className='text-slate-200 font-semibold text-lg'>{errorMessage}</span>
            </div>
        </>
    );
};

export default ErrorMessage;
