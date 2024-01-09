const NavItem = ({ text, status, children }) => {
  return (
    <div
      className={
        !status
          ? "py-2 px-3 leading-tight hover:cursor-pointer select-none flex justify-start items-center bg-opacity-80 opacity-80 hover:opacity-100 rounded  text-sm text-white hover:bg-white hover:bg-opacity-10"
          : "py-2 px-3 leading-tight hover:cursor-pointer select-none flex justify-start items-center opacity-100 rounded text-white bg-white bg-opacity-10 text-sm"
      }
    >
      <div className="w-5 h-5 relative">{children}</div>
      <div className="pl-2.5 text-white">{text}</div>
    </div>
  );
};

export default NavItem;
