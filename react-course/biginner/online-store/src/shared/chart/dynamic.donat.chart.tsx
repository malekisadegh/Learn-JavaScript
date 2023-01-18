import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const DynamicDonatChart = (props: any) => {
  if (!props.data) {
    return <div>NO DATA</div>;
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;

  return (
    <div className="w-96 h-96">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            data={props.data}
            cx="50%"
            cy="50%"
            innerRadius={160}
            outerRadius={180}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {props.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DynamicDonatChart;
