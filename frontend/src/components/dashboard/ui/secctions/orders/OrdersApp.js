'use client'
import { Avatar, Card, Container, IconButton, LinearProgress, Stack, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { OrdersListToolbar } from './OrdersListToolbar'
import { applySortFilter, getComparator } from '@/utils';
import ScrollBar from '../../scrollbar/ScrollBar';
import ListHead from '../ui/ListHead';
import Link from 'next/link';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoEyeSharp } from "react-icons/io5";
import Label from '../../label';
import { sentenceCase } from 'change-case';
import { EmptyContent } from '../ui/EmptyContent';
import { DeleteDialog } from '../ui/DeleteDialog';
import toast from 'react-hot-toast';

const TABLE_HEAD = [
    { id: 'order', label: 'Pedido', alignRight: false },
    { id: 'customer', label: 'Cliente', alignRight: false },
    { id: 'date', label: 'Fecha', alignRight: false },
    { id: 'items', label: 'Elementos', alignRight: false },
    { id: 'price', label: 'Precio', alignRight: false },
    { id: 'status', label: 'Estado', alignRight: false },
    { id: '' },
  ];

  export const ORDERS_LIST = [
    { id: 1, order: '0001', customer: { name: 'Jayvion Simon', email: 'ashlynn.ohara62@gmail.com', imageUrl: '' }, date: '20 de noviembre de 2024', items: '2', price: '1,500,000', status: 'pagado' },
    { id: 2, order: '0002', customer: { name: 'Amara Nguyen', email: 'amara.nguyen88@gmail.com', imageUrl: '' }, date: '18 de noviembre de 2024', items: '1', price: '500,000', status: 'no pagado' },
    { id: 3, order: '0003', customer: { name: 'Kylan Walker', email: 'kylan.walker23@gmail.com', imageUrl: '' }, date: '15 de noviembre de 2024', items: '3', price: '2,300,000', status: 'no pagado' },
    { id: 4, order: '0004', customer: { name: 'Layla Bennett', email: 'layla.bennett12@gmail.com', imageUrl: '' }, date: '14 de noviembre de 2024', items: '5', price: '4,100,000', status: 'pagado' },
    { id: 5, order: '0005', customer: { name: 'Ryder Thompson', email: 'ryder.thompson34@gmail.com', imageUrl: '' }, date: '12 de noviembre de 2024', items: '2', price: '1,200,000', status: 'no pagado' },
    { id: 6, order: '0006', customer: { name: 'Liana Woods', email: 'liana.woods56@gmail.com', imageUrl: '' }, date: '10 de noviembre de 2024', items: '4', price: '3,000,000', status: 'no pagado' },
    { id: 7, order: '0007', customer: { name: 'Tobias Rivera', email: 'tobias.rivera78@gmail.com', imageUrl: '' }, date: '8 de noviembre de 2024', items: '6', price: '5,500,000', status: 'pagado' },
    { id: 8, order: '0008', customer: { name: 'Maya Flores', email: 'maya.flores99@gmail.com', imageUrl: '' }, date: '6 de noviembre de 2024', items: '3', price: '2,100,000', status: 'no pagado' },
    { id: 9, order: '0009', customer: { name: 'Eli Carter', email: 'eli.carter77@gmail.com', imageUrl: '' }, date: '5 de noviembre de 2024', items: '1', price: '700,000', status: 'pendiente' },
    { id: 10, order: '0010', customer: { name: 'Harper Diaz', email: 'harper.diaz22@gmail.com', imageUrl: '' }, date: '3 de noviembre de 2024', items: '7', price: '6,800,000', status: 'pagado' }
];


export const OrdersApp = () => {

    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('order');
    const [filterOrder, setFilterOrder] = useState('')
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [idOrderDelete, setIdOrderDelete] = useState(null);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
      };

      const handleFilterByOrder = (event) => {
        setPage(0);
        setFilterOrder(event.target.value);
      };

      const handleDelete = (id) => {
        setOpenDeleteDialog(true)
        setIdOrderDelete(id);
      }

      const handleCancelDelete = () => {
        setOpenDeleteDialog(false); 
      }

      const handleConfirmDelete = () => {
        // todo: Lógica para eliminar el usuario
        setOpenDeleteDialog(false);
        toast.success('Eliminado exitosamente')
      };

      const filteredOrders = applySortFilter(ORDERS_LIST, getComparator(order, orderBy), filterOrder, orderBy);

      const isNotFound = !filteredOrders.length && !!filterOrder;

  return (
    <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4} mt={2}>
          <Typography variant="h4" gutterBottom>
            Pedidos
          </Typography>
          
         
        </Stack>
        <Card>
            <OrdersListToolbar filterName={filterOrder} onFilterName={handleFilterByOrder} arr={ORDERS_LIST}/>
            <ScrollBar>
                <TableContainer sx={{ minWidth: 800 }}>
                    <Table>
                        <ListHead
                            order={order}
                            orderBy={orderBy}
                            headLabel={TABLE_HEAD}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                        {filteredOrders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row) => {

                            const { id, order, customer, date, items, price, status  } = row;


                            return (
                            <TableRow hover key={id} tabIndex={-1}  >

                            <TableCell align="left">#{order}</TableCell>

                                <TableCell component="th" scope="row" >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Avatar
                                        src={customer?.imageUrl || `https://inversionesdiomardisas.vercel.app/assets/images/avatars/avatar_${id}.jpg`  }
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Typography variant="subtitle2" noWrap>
                                    {customer?.name}
                                    </Typography>
                                </Stack>
                                </TableCell>

                                <TableCell align="left">{date}</TableCell>

                                <TableCell align="left">{items}</TableCell>

                                <TableCell align="left">{price}</TableCell>

                                <TableCell align="left">
                                    <Label color={status === 'pagado' ? 'success' : 'error'}>{sentenceCase(status)}</Label>
                                </TableCell>

                                <TableCell align="right" >
                                <Link href={`/dashboard/orders/${id}`}>
                                <Tooltip title="Ver">
                                    <IconButton size="small" sx={{padding:'12px'}} color="inherit" >
                                    <IoEyeSharp size={20} />
                                    </IconButton>
                                </Tooltip>
                                </Link>
                                <Tooltip title="Eliminar">
                                    <IconButton size="small" sx={{padding:'12px'}} color="inherit" onClick={()=>handleDelete(id)} >
                                    <RiDeleteBin6Fill size={20} color='red'/>
                                    </IconButton>
                                </Tooltip>
                                </TableCell>
                            </TableRow>
                            );
                        })}
                        </TableBody>
                        {
                            ORDERS_LIST.length <= 0 && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">
                                            <Typography variant="h6" color="textSecondary" noWrap p={6}>
                                                No hay mascotas registradas
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            ) 
                        }
                        {
                            isNotFound && (
                                <EmptyContent filterName={filterOrder} colSpan={7}/>
                            )
                        }
                    </Table>
                </TableContainer>
            </ScrollBar>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={ORDERS_LIST.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />


        </Card>

        <DeleteDialog
        open={openDeleteDialog}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        subtitle='¿Estás seguro que deseas eliminar este pedido?'
        />

    </Container>
  )
}
