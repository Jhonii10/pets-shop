'use client';

import { Container, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import StatCard from './StatCard'
import Grid from '@mui/material/Grid2';
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { OrderStatusCharts } from './OrderStatusCharts';
import { SalesChartByType } from './SalesChartByType';

export const ReportsApp = () => {
    const theme = useTheme();


  return (
    <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4} mt={2}>
          <Typography variant="h4" gutterBottom>
            Reportes
          </Typography>
        </Stack>

        <Grid container spacing={2}>

              <Grid size={{ xs: 12, sm:6, md: 3 }}>
                <StatCard
                    title="Ventas Semanales"
                    icon={<HiMiniShoppingBag size={48} color='blue' />}
                    total={'10,000,000'}
                    color='info'
                    />
              </Grid>

              <Grid size={{ xs: 12, sm:6, md: 3 }}>
                <StatCard
                    title="Nuevos usuarios"
                    icon={<FaUserFriends size={48} color='green' />}
                    total={'10'}
                    color='success'
                    />
              </Grid>

              <Grid size={{ xs: 12, sm:6, md: 3 }}>
                <StatCard
                    title="Ordenes de compra"
                    icon={<FaShoppingCart size={48} color='gold' />}
                    total={'700'}
                    color='warning'
                    />
              </Grid>

              <Grid size={{ xs: 12, sm:6, md: 3 }}>
                <StatCard
                    title="Testimonios"
                    icon={<FaHeartCircleCheck size={48} color='red' />}
                    total={'350'}
                    color='error'
                    />
              </Grid>

              <Grid size={{ xs: 12, md:6, lg: 8 }} >
                <OrderStatusCharts
                title="Estados de pedidos"
                chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec']}
                chartData={[
                    {
                    name: 'No pagados',
                    type: 'column',
                    fill: 'solid',
                    data: [3, 1, 2, 7, 3, 2, 7, 1, 4, 2, 0],
                    color: '#FF5630',
                    },
                    {
                    name: 'Pagados',
                    type: 'column',
                    fill: 'solid',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                    color: '#22C55E',
                    },
                    
                ]}
                />
              </Grid>

              <Grid size={{ xs: 12, md:6, lg: 4 }} >
              <SalesChartByType
                title="Ventas por tamaño"
                chartData={[
                    { label: 'Mini', value: 50 },
                    { label: 'pequeño', value: 100 },
                    { label: 'Mediano', value: 400 },
                    { label: 'Grande', value: 70 },
                ]}
                chartColors={[
                    theme.palette.primary.main,
                    theme.palette.info.main,
                    theme.palette.warning.main,
                    theme.palette.error.main,
                ]}
              />
              </Grid>


        </Grid>

    </Container>
  )
}
