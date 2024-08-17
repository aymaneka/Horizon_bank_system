"use client";  

import React, { useRef } from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const ref = useRef(null);  // Example usage of useRef

  return (
    <div ref={ref} className='w-full'>
      <CountUp
        
        decimal=','
        prefix='$'
        decimals={2}
      end={amount} />
    </div>
  );
};

export default AnimatedCounter;
