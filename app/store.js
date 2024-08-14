import create from 'zustand';

const useStore = create((set) => ({
  cells: Array(1000).fill().map((_, i) => ({ id: i, value: '' })), // 1000 blank cells
  setCellValue: (id, value) =>
    set((state) => ({
      cells: state.cells.map((cell) =>
        cell.id === id ? { ...cell, value } : cell
      ),
    })),
}));

export default useStore;
