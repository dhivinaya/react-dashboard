import { FaBell } from "react-icons/fa";

export default function Notifications() {
  return (
    <div className="relative group cursor-pointer">
      <FaBell className="text-xl" />
      <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow rounded p-2 hidden group-hover:block w-40">
        <p>No new notifications</p>
      </div>
    </div>
  );
}
