import Navbar from "./navbar/Navbar";
import Payment from "./payments/Payment";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex flex-nowrap">
      <Navbar />
      <Payment />
    </div>
  );
};

export default Dashboard;
