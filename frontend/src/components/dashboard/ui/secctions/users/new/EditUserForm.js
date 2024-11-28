'use client';

import React from 'react'
import {
    Box,
    Card,
    TextField,
    Button,
    Stack,
    MenuItem,
    Container,
    Typography,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { notFound, redirect, useRouter } from 'next/navigation';
import { USERLIST } from '../Userapp';
import Label from '../../../label';
import { sentenceCase } from 'change-case';

export const EditUserForm = ({id}) => {

    const user = USERLIST?.find(user => String(user.id) === (id));

    if (!user) return notFound();

    // todo: integrar el backend

    const {name , email, role, status } = user ;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
        watch,
        reset
      } = useForm();

    const router = useRouter();

    const onSubmit = async (data) => {

        try {

            const result = true;

            if (result) {
                toast.success('Actualizado exitosamente.');
                reset();
                router.refresh('/dashboard/users')
                router.push('/dashboard/users');

            }else{
                toast.error('algo salio mal');
            }
            
        } catch (error) {
            console.error(error);
        }
        
    };

    return (
        <Container>
            <Stack direction="column" mb={3} mt={2}>
              <Typography variant="h4" gutterBottom>
                Editar
              </Typography>
              <Link href={'/dashboard/users'}>  
                <Button sx={{color:'#000' , '&:hover':{ backgroundColor:'rgba(145 158 171 / 0.08)'}}}>
                <MdOutlineKeyboardArrowLeft size={16}/>
                <Typography sx={{marginLeft:'4px'}}>
                    Atras
                </Typography>     
                </Button>
              </Link>
            </Stack>
        <Grid container spacing={2}>
          <Grid item size={{xs:12 , md:8}}>
            <Card sx={{ padding: 4 , borderRadius:'16px' }}>
                <Box textAlign={'end'}>
                    <Label color={(status === 'inactivo' && 'error') || 'success'} >{sentenceCase(status)}</Label>
                </Box>
              <Box component={'form'} autoComplete="off" onSubmit={handleSubmit(onSubmit)} mt={2}>
                <Box  
                        sx={{
                                display: "grid",
                                gap: "24px 16px",
                                gridTemplateColumns: {
                                xs: "repeat(1, 1fr)", 
                                sm: "repeat(2, 1fr)", 
                                },
                                "& .MuiTextField-root": {
                                    
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "black",
                                    fontWeight: "600",
                                },
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "black !important",
                                },
                                },
                            }}
                >
                    <TextField 
                    fullWidth
                    label="Nombre completo"
                    defaultValue={name}
                    {...register('name',{required:'El nombre es obligatorio'})}
                    error={!!errors.name}
                    variant="outlined"
                    helperText={errors.name?.message}
                    />
    
                    <TextField
                    fullWidth
                    label="Correo electronico"
                    defaultValue={email}
                    {...register("email", {
                        required: "El correo es obligatorio",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Correo inválido",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    variant="outlined"
                    />
                    
                    <TextField
                    fullWidth
                    select
                    defaultValue={'cedula de cuidadania'}
                    label="Tipo de documento"
                    {...register("typedocument")}
                    variant="outlined"
                    >
                        <MenuItem value="cedula de cuidadania">Cédula de ciudadanía</MenuItem>
                        <MenuItem value="tarjeta de identidad">Tarjeta de identidad</MenuItem>
                        <MenuItem value="cedula de extranjeria">Cédula de extranjería</MenuItem>
                    </TextField>
                    <TextField
                    fullWidth
                    label="Numero de documento"
                    {...register("numberId", {
                        required: "El numero de documento es obligatorio",
                    })}
                    error={!!errors.numberId}
                    helperText={errors.numberId?.message}
                    variant="outlined"
                    />
                    <TextField
                    fullWidth
                    label="Telefono"
                    {...register("phone", {
                        required: "El telefono es obligatorio",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Solo se permiten números",
                        },
                    })}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    variant="outlined"
                    />
                    
                    <TextField
                    fullWidth
                    label="Role"
                    select
                    defaultValue={role}
                    {...register("role")}
                    variant="outlined"
                    
                    >
                        <MenuItem value="cliente">Cliente</MenuItem>
                        <MenuItem value="asesor de ventas">asesor de ventas</MenuItem>
                        <MenuItem value="administrador">administrador</MenuItem>
    
                    </TextField>
                    
                    
                </Box>
                <Stack direction="row" justifyContent="flex-end" mt={'24px'}>
                    <Button 
                        type="submit" 
                        sx={{
                            backgroundColor: '#000',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#454F5B',
                            }
    
                        }}
                        disabled={isSubmitting}
                    >
                       { !isSubmitting ? 'Guardar cambios' : 'Guardando...'}
                    </Button>
                    </Stack>
                </Box>
            </Card>
          </Grid>
        </Grid>
        </Container>
      );
}
