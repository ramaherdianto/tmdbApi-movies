import React from 'react';

const Summary = () => {
    return (
        <>
            <section className='p-8 flex flex-col bg-navbar gap-4 sticky -top-5 z-10 shadow-[0px_20px_33px_-8px_rgba(0,0,0,0.49)]'>
                <h3 className='text-xl text-slate-200 font-semibold'>MOVIES YOU WATCHED</h3>
                <div className='flex gap-6'>
                    <p>
                        <span>#️⃣ </span>
                        <span className='text-slate-200 text-sm'>0 Movies</span>
                    </p>
                    <p>
                        <span>🎬 </span>
                        <span className='text-slate-200 text-sm'>0.0</span>
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
            </section>
        </>
    );
};

export default Summary;
