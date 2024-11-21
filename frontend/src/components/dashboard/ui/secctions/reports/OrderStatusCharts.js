import React from 'react'
import { useChart } from '../../chart';

import dynamic from 'next/dynamic';
import { Box, Card, CardHeader } from '@mui/material';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export const OrderStatusCharts = ({ title, subheader, chartLabels, chartData, ...other }) => {
    const chartOptions = useChart({
        plotOptions: { bar: { columnWidth: '55%', horizontal: false, endingShape: 'rounded'} },
        fill: { type: chartData.map((i) => i.fill) },
        xaxis: { type:'category',  categories: chartLabels},
        stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: (y) => {
              if (typeof y !== 'undefined') {
                return `${y.toFixed(0)}`;
              }
              return y;
            },
          },
        },
      });
    
      return (
        <Card {...other} sx={{borderRadius:'16px'}}>
          <CardHeader title={title} sx={{textAlign:'left' ,p:3}} />
    
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <ApexCharts type="line" series={chartData} options={chartOptions} height={364} />
          </Box>
        </Card>
      );
}
