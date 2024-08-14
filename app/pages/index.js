"use client";

import Cell from './Cell'; // Import the Cell component
import useStore from '../store';

const Grid = () => {
  const cells = useStore((state) => state.cells);

  return (
    <div className="grid grid-cols-10 gap-1 p-4">
      {cells.map((cell) => (
        <Cell key={cell.id} cell={cell} /> // Cell component for each cell
      ))}
    </div>
  );
};

export default Grid;
