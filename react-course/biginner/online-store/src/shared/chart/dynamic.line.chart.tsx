import React from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

const DynamicLineChart = (props: any) => {
  if (!props.data) {
    return <div>NO DATA</div>;
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={700}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke={COLORS[0]}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke={COLORS[1]} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DynamicLineChart;
