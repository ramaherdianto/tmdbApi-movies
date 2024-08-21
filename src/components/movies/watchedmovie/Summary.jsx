import React from 'react';
import Button from '../../button/Button';

const Summary = ({ isOpen, handleOpen }) => {
    return (
        <>
            <section className='px-4 py-8 md:px-8 flex flex-col bg-navbar gap-4 sticky top-0 z-10 shadow-[0px_20px_33px_-8px_rgba(0,0,0,0.49)]'>
                <h3 className='text-xl text-slate-200 font-semibold'>Movies You Watched</h3>
                <div className='flex gap-6'>
                    <p>
                        <span>🎬 </span>
                        <span className='text-slate-200 text-sm'>0 Movies</span>
                    </p>
                    <p>
                        <span>🌟 </span>
                        <span className='text-slate-200 text-sm'>0.0</span>
                    </p>
                    <p>
                        <span>⏳ </span>
                        <span className='text-slate-200 text-sm'>0.0</span>
                    </p>
                </div>
                <Button
                    className={`w-[2em] h-[2em] z-20 ${
                        isOpen ? 'bg-[#24323f] absolute right-2 top-[24.5px]' : 'bg-sidebar'
                    } text-lg font-bold bg-navbar rounded-full text-primary absolute right-2 top-[12.5px]`}
                    onClick={handleOpen}
                >
                    {isOpen ? '-' : '+'}
                </Button>
            </section>
        </>
    );
};

export default Summary;
