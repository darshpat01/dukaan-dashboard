const Footer = () => {
  const numberStyle =
    "text-center text-sm leading-tight rounded min-w-7 px-1.5 py-1 hover:cursor-pointer select-none hover:bg-sky-700 hover:text-white";
  const numberStyle2 =
    "text-center text-sm leading-tight rounded bg-sky-700 text-white px-1.5 py-1 hover:cursor-pointer select-none";
  return (
    <div className="pt-4 flex justify-center items-center text-[#4D4D4D]">
      <div className="flex  justify-center items-center gap-4">
        <div className="flex select-none justify-center items-center hover:cursor-pointer pl-1.5 pr-3 py-1.5 rounded border border-zinc-300 gap-1.5 hover:bg-zinc-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
              fill="#4D4D4D"
            />
          </svg>
          <div>Previous</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className={numberStyle}>1</div>
          <div className={numberStyle}>...</div>
          <div className={numberStyle2}>10</div>
          <div className={numberStyle}>12</div>
          <div className={numberStyle}>13</div>
          <div className={numberStyle}>14</div>
          <div className={numberStyle}>15</div>
          <div className={numberStyle}>16</div>
          <div className={numberStyle}>17</div>
          <div className={numberStyle}>18</div>
        </div>
        <div className="flex select-none hover:bg-zinc-100 pl-3 pr-1.5 py-1.5 justify-center items-center hover:cursor-pointer rounded border border-zinc-300 gap-1.5">
          <div>Next</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
              fill="#4D4D4D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
