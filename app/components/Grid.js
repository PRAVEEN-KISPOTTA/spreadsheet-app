"use client";
import "../globals.css"

import Cell from './Cell';
import useStore from '../store';

const Grid = () => {
  const cells = useStore((state) => state.cells);

  return (
    <div className="grid grid-cols-10 gap-1 p-4">
      {cells.map((cell) => (
        <Cell key={cell.id} cell={cell} /> // Rendering each Cell component
      ))}
    </div>
  );
};

export default Grid;
