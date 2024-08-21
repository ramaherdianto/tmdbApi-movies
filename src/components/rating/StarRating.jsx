import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ max, size, onUserRating }) => {
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    const handleRating = (rating) => {
        setRating(rating);
        onUserRating(rating);
    };

    return (
        <>
            <div className='flex items-center gap-4'>
                <div className='flex'>
                    {Array.from({ length: max }, (_, i) => (
                        <Star
                            key={i}
                            onRating={() => handleRating(i + 1)}
                            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                            onHoverIn={() => setTempRating(i + 1)}
                            onHoverOut={() => setTempRating(0)}
                            size={size}
                        />
                    ))}
                </div>
                <p className='text-white'>
                    {tempRating ? `${tempRating} Star` : rating ? `${rating} Star` : '0 Star'}
                </p>
            </div>
        </>
    );
};

export default StarRating;
