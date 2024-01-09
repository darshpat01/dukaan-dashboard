import Search from "./Search";

const Table = () => {
  return (
    <div className="pt-2">
      <div className="bg-white rounded p-1">
        <div className="flex justify-between items-center">
          <Search />
          <div className="flex justify-start items-center">
            <div>Sort</div>
            <div className="ml-2">Download</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
