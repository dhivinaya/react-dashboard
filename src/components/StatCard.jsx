import { FaUsers, FaDollarSign, FaShoppingCart, FaChartLine } from "react-icons/fa";

export default function StatCard({ title, value, icon }) {
  const icons = {
    users: <FaUsers className="text-3xl text-blue-600" />,
    sales: <FaDollarSign className="text-3xl text-green-600" />,
    orders: <FaShoppingCart className="text-3xl text-yellow-600" />,
    revenue: <FaChartLine className="text-3xl text-purple-600" />,
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center transform transition-transform hover:scale-105 hover:shadow-lg">
      <div className="mb-2 flex justify-center">{icons[icon]}</div>
      <p className="text-sm text-gray-500 dark:text-gray-300">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
