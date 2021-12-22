function Grid({ children }) {
  return (
    <div className="grid grid-cols-4 gap-2 bg-gray-800 shadow-xl rounded-xl px-4 p-6">
      {children}
    </div>
  );
}

export default Grid;
