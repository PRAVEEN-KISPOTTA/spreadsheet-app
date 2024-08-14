"use client";

import { useState } from 'react';
import useStore from '../store';
import "../globals.css"

const Cell = ({ cell }) => {
  const [value, setValue] = useState(cell.value);
  const setCellValue = useStore((state) => state.setCellValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    setCellValue(cell.id, e.target.value);
  };

  return (
    <input
      type="text"
      className="border p-2 w-full"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Cell;
