import React from 'react'
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  value: number;
  center?: boolean;
}

export default function Rating({ value, center=false }:RatingProps) {
    const renderStars = (rating:number) => {
        const filledStars = Array.from({ length: rating }, (_, index) => (
          <FaStar key={`filled-${index}`} className="text-yellow-500" />
        ));
    
        const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
          <FaStar key={`empty-${index}`} className="text-gray-300" />
        ));
    
        return [...filledStars, ...emptyStars];
      };
    return (
        <div className={`flex ${center && 'justify-center'} gap-1`}>
          {renderStars(value)}
        </div>
    )
}
