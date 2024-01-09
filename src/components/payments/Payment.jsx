import Table from "./table/Table";
import Header from "./header/Header";

const Payment = () => {
  return (
    <div className="bg-[#fafafa] w-full overflow-y-auto">
      <Header />
      <div className="p-4">
        <div>
          <div className="flex justify-between">
            <div className="text-zinc-900  text-xl leading-7 ">Overview</div>
            <div className="px-2 rounded bg-white border border-zinc-300 text-[#4D4D4D]  text-center">
              <select id="time" name="time" className="h-9  outline-none">
                <option value="month">Last Month</option>
                <option value="week">Last Week</option>
                <option value="hours">Last 24 Hours</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6 pt-4">
            <div className="p-5 bg-white rounded-lg gap-4 shadow flex-col justify-start items-start  inline-flex basis-1/2">
              <div>Online orders</div>
              <div className="text-[32px]">231</div>
            </div>
            <div className="p-5 bg-white rounded-lg gap-4 shadow flex-col justify-start items-start  inline-flex basis-1/2">
              <div>Amount received</div>
              <div className="text-[32px]">₹23,92,312.19</div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="text-zinc-900  text-xl leading-7 ">
            Transactions | This Month
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Payment;
