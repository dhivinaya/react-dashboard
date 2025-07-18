import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 600 },
  { name: "May", users: 700 },
];

export default function ChartSection() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-lg font-bold mb-2">User Growth</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Distribution</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie dataKey="users" data={data} cx="50%" cy="50%" outerRadius={60}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"][index % 5]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
