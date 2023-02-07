import React, { useState } from 'react';

interface Props {
  onChange: (value:React.ChangeEvent<HTMLInputElement>) => void;
  valor?: number;
  min?: number;
  max?: number;
  titulo?: string;
  multiple?: number;
}

const RangeSelector: React.FC<Props> = ({ onChange,valor, titulo, min, max }) => {
  // const [value, setValue] = useState(1);

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={valor}
        onChange={onChange}
      />
      <p>{titulo}</p>
    </div>
  );
};

export default RangeSelector;