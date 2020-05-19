import React from 'react';
import { Line, Radar, } from 'react-chartjs-2';
import {chartData} from '../data'


function  Chart(props) { 
    return(
        <div className="ChartComponent">
            {console.log(props.chartData, '--------')}
            <div style={{height: '300px', maxWidth: '700px', width: '100%', margin: '0 auto'}}>
            <Line
                data={chartData}
                width={270}
                height={270}
                options={{ maintainAspectRatio: false }} 
            />
            </div> <br/>
            <br/>
            <br/>
            <div style={{height: '700px', maxWidth: '700px', width: '100%', margin: '0 auto'}}>
            <Radar
                data={chartData}
                width={270}
                height={270}
                options={{ maintainAspectRatio: false }} 
            />
            </div>

            {/* <div style={{height: '700px', maxWidth: '700px', width: '100%', margin: '0 auto'}}>
            <PolarArea
                data={chartData}
                width={270}
                height={270}
                options={{ maintainAspectRatio: false }} 
            />
            </div> */}
        </div>
    )

}

export default Chart