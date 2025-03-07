import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const data = [
	{
	  name: 'Jan, 2024',
	  sms: 0,
	  'Confirmed Appointment': 0,
	  Requirements: 0,
	  Call: 0,
	},
	{
	  name: 'Feb, 2024',
	  sms: 0,
	  'Confirmed Appointment': 0,
	  Requirements: 0,
	  Call: 0,
	},
	{
	  name: 'Mar, 2024',
	  sms: 30,
	  'Confirmed Appointment': 30,
	  Requirements: 30,
	  Call: 10,
	  Buzz: 10,
	},
	{
	  name: 'Apr, 2024',
	  sms: 0,
	  'Confirmed Appointment': 0,
	  Requirements: 0,
	  Call: 0,
	},
];

export default class Progress extends PureComponent {

  render() {
	return (
	  <ResponsiveContainer width="100%" height="100%">
		<BarChart
		  data={data}
		>
		  <XAxis dataKey="name" />
		  <YAxis />		  
		  <Bar dataKey="sms" stackId="a" fill="yellow" />
		  <Bar dataKey="Confirmed Appointment" stackId="a" fill="green" />
		  <Bar dataKey="Requirements" stackId="a" fill="red" />
		  <Bar dataKey="Call" stackId="a" fill="blue" />
		  <Bar dataKey="Buzz" stackId="a" fill="gray" />
		</BarChart>
	  </ResponsiveContainer>
	);
  }
}
