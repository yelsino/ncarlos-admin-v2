import React, { useState } from 'react';

interface Props {
  onChange: (value:React.ChangeEvent<HTMLInputElement>) => void;
  valor?: number;
  min?: number;
  max?: number;
  titulo?: string;
  multiple?: number;
  step?: number;
}

const RangeSelector: React.FC<Props> = ({ onChange,valor, titulo, min, max, step }) => {

  return (
    <div className=''>
      
        <input 
          className="rounded-lg overflow-hidden appearance-none bg-gray-100 h-3 w-full accent-orange-600" type="range" 
          min={min}
          max={max} 
          step={step} 
          onChange={onChange}
          value={valor} 
          />
          <p className='font-semibold font-poppins'>{titulo}</p>
    </div>
  );
};

export default RangeSelector;