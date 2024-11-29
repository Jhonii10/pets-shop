'use client';

import { Avatar, Box, Button, Card, CardHeader, Container, Divider, ListItemText, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Grid from '@mui/material/Grid2';
import ScrollBar from '../../../scrollbar/ScrollBar';
import { redirect } from 'next/navigation';
import { PET_ORDERS_LIST } from './data';
import { fCurrency } from '@/utils/formatNumber';
import Label from '../../../label';
import { sentenceCase } from 'change-case';

export const ViewOrderId = ({id}) => {

    const order = PET_ORDERS_LIST.find(pet => String(pet.id) === id);


    if (!order) {
        redirect('/dashboard/orders');
    }

    console.log();
    
    
  return (
    <Container>
    <Stack direction="column" mb={3} mt={2}>
        <Typography variant="h4" gutterBottom>
          Pedido #{order.order}
        </Typography>
        <Link href={'/dashboard/pets'}>
          <Button sx={{ color: '#000', '&:hover': { backgroundColor: 'rgba(145 158 171 / 0.08)' } }}>
            <MdOutlineKeyboardArrowLeft size={16} />
            <Typography sx={{ marginLeft: '4px' }}>Atrás</Typography>
          </Button>
        </Link>
      </Stack>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md:6, lg: 8 }}>
            <Card sx={{ borderRadius:'16px'}}>
                <CardHeader 
                    title={'Detalles'} 
                    action={<Label color={order.status === 'pagado' ? 'success' : 'error'}>
                    {sentenceCase(order.status)}</Label>}
                    sx={{padding:'24px 24px 0px'}}    
                    />
                <ScrollBar>
                {
                    order.items.map(item => (
                        
                

                <Stack direction="row" alignItems="center" p={'24px'}>
                    <Avatar
                        variant="rounded"
                        src={item.image}
                        alt={item.title}
                        sx={{ width: 56, height: 56 , marginRight: '16px' }}
                    />
                    <ListItemText
                        primary={
                        <Typography variant="body1">{item.breed}</Typography>
                        }
                    />
                    <Box>x{item.quantity}</Box>
                    <Box width={'120px'} textAlign={'right'}>{fCurrency(item.total)}</Box>
                </Stack>
                        ))
                    }
                </ScrollBar>
                
                <Stack 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        alignItems: 'flex-end',
                        padding:'24px',
                        textAlign:'right'
                    }}>
                        <Stack sx={{display:'flex', flexDirection: 'row'}} >
                            <Box>
                                <Typography>Subtotal</Typography>
                            </Box>
                            <Box width={'160px'}>
                                <Typography fontWeight={'600'}>{fCurrency((parseInt(order.totalOrder) - (parseInt(order.totalOrder)*0.19)).toFixed(2))}</Typography>
                            </Box>
                        </Stack>

                        <Stack sx={{display:'flex', flexDirection: 'row'}} >
                            <Box>
                                <Typography>Impuestos</Typography>
                            </Box>
                            <Box width={'160px'}>
                                <Typography fontWeight={'500'}>{fCurrency((parseInt(order.totalOrder)*0.19))}</Typography>
                            </Box>
                        </Stack>

                        <Stack sx={{display:'flex', flexDirection: 'row', }} >
                            <Box>
                                <Typography fontWeight={700} sx={{fontSize:'1.1rem'}}>Total</Typography>
                            </Box>
                            <Box width={'160px'} >
                                <Typography fontWeight={'700'} sx={{fontSize:'1.1rem'}}>{fCurrency(parseInt(order.totalOrder))}</Typography>
                            </Box>
                        </Stack>
                </Stack>
            </Card>
        </Grid>

        <Grid size={{ xs: 12, md:6, lg: 4 }} >
            <Card>
                <CardHeader title={'Informacion del cliente'}/>
                <Stack direction="row" spacing={2} alignItems="center" p={'24px'}>
                    <Avatar 
                        alt="Jayvion Simón" 
                        src={`https://inversionesdiomardisas.vercel.app/assets/images/avatars/avatar_${id}.jpg` }
                    />
                    <Box>
                        <Typography variant="subtitle2">{order?.customer.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {order?.customer.email}
                        </Typography>
                    </Box>
                </Stack>
                <Divider sx={{borderStyle:'dashed'}}/>
                <CardHeader title={'Direccion de entrega'} sx={{padding:'24px 24px 0px'}}/>
                <Stack spacing={2} p={'24px'}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Box>
                        <Typography variant="body2" width={'120px'} flexShrink={0}>Direccion</Typography>
                        </Box>
                        <Typography variant="body2">Cra 5 #1-c2</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Box>
                        <Typography variant="body2" width={'120px'} flexShrink={0}>Cuidad</Typography>
                        </Box>
                        <Typography variant="body2">Santiago de cali</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Box>
                        <Typography variant="body2" width={'120px'} flexShrink={0}>Número de teléfono</Typography>
                        </Box>
                        <Typography variant="body2">3138696001</Typography>
                    </Stack>
                </Stack>


            </Card>
        </Grid>

      </Grid>
    </Container>

  )
}
