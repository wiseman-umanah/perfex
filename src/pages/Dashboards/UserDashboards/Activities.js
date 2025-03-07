import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'To do',
		sms: 2,
		'Confirmed Appointment': 1,
		Requirements: 1,
		Call: 2,
	},
];

export default class Activities extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="sms" stackId="a" fill="yellow" />
          <Bar dataKey="Confirmed Appointment" stackId="a" fill="green" />
          <Bar dataKey="Requirements" stackId="a" fill="red" />
          <Bar dataKey="Call" stackId="a" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
