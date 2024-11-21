'use client';

import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import StatCard from './StatCard'
import Grid from '@mui/material/Grid2';
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";

export const ReportsApp = () => {
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
                    title="reseñas"
                    icon={<FaHeartCircleCheck size={48} color='red' />}
                    total={'350'}
                    color='error'
                    />
              </Grid>


        </Grid>

    </Container>
  )
}
