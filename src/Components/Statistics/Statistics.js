import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import './Statistics.css'

const Statistics = () => {
    const stat = useLoaderData()
    const { data } = stat;

    return (
        <div >
            <div className='chart'>
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;