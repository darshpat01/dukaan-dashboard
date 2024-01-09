const TableItems = () => {
  return (
    <div className="px-3 py-3.5 bg-white grid grid-cols-4 gap-10 border-b border-zinc-300 hover:bg-zinc-100">
      <div className="text-sky-700 text-sm leading-tight flex justify-start items-center hover:cursor-pointer">
        #281209
      </div>
      <div className="text-zinc-900 text-sm leading-tight flex justify-start items-center">
        7 July, 2023
      </div>
      <div className="text-zinc-900 text-sm leading-tight flex justify-end items-center">
        ₹1,278.23
      </div>
      <div className="text-zinc-900 text-sm leading-tight flex justify-end items-center">
        ₹22
      </div>
    </div>
  );
};

export default TableItems;
