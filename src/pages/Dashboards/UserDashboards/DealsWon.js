import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
	{
	  name: 'Jan, 2024',
	  uv: 0
	},
	{
	  name: 'Feb, 2024',
	  uv: 0
	},
	{
	  name: 'Mar, 2024',
	  uv: 5.3
	},
	{
	  name: 'Apr, 2024',
	  uv: 0
	},
];

export default class DealsWon extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
			<XAxis dataKey="name" />
			<YAxis />
          <Bar dataKey="uv" fill="purple" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
