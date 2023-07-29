import React, { PureComponent } from 'react';
import "./reytingchart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
    {
        name: 'Page A',
        uv: 30,
    },
    {
        name: 'Page B',
        uv: 250,
    },
    {
        name: 'Page C',
        uv: 180,
    },
    {
        name: 'Page D',
        uv: 500,
    },
    {
        name: 'Page E',
        uv: 600,
    },
    {
        name: 'Page F',
        uv: 880,
    },
];

const cardinal = curveCardinal.tension(1);
const Reyting = () => {
    return (
        <React.Fragment>
            <div className="reyting2">
            <p className='reytingchart__p'>Мировой рейтинг</p>
                <div className="reyting__chart">
                    <ResponsiveContainer width={449} height={320}>
                        <AreaChart
                            data={data}
                            margin={{
                                top: -0,
                                right: 30,
                                left: 0,
                                bottom: 50,
                            }}
                        >
                            <CartesianGrid strokeDasharray="7" vertical={0} />
                            <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
                            <Area type="monotone" dataKey="uv" stroke="#000D7F" fill="#8884d8" fillOpacity={0.2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Reyting;




