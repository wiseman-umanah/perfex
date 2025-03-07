import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from 'recharts';


export default class Deals extends PureComponent {
	state = {
		data: [
		{
			name: 'Application Pending',
			uv: 5,
		},
		{
			name: 'Requirements',
			uv: 5,
		},
		{
			name: 'Declined',
			uv: 5,
		},
		{
			name: 'Approved',
			uv: 4,
		},
		{
			name: 'Issued',
			uv: 4,
		},
		{
			name: 'Current & Paid',
			uv: 4,
		},
		{
			name: 'Won',
			uv: 4,
		},
	],
	activeIndex: 0,
}


  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;

    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
		  <XAxis dataKey="name" />
		  <YAxis />
            <Bar dataKey="uv" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? 'green' : 'purple'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
    );
  }
}