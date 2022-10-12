import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, } from "recharts";
import './Statistics.css'

const Statistics = () => {
    const stat = useLoaderData()
    const { data } = stat;
    console.log(stat)

    return (
        <div >
            <div className='chart'>
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;