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
import { registerUser } from '@/lib/auth/actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const CreateNewUserForm =  () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
        watch,
        reset
      } = useForm();

    const router = useRouter();

    const password = watch("password", "");

    const onSubmit = async (data) => {

        try {

            const result = await registerUser(data.name, data.email, data.password);

            if (result.ok) {
                toast.success('Usuario creado exitosamente.');
                reset();
                router.refresh('/dashboard/users')

            }else{
                toast.error(result?.message);
            }
            
        } catch (error) {
            console.error(error);
        }
        
    };

  return (
    <Container>
        <Stack direction="column" mb={3} mt={2}>
          <Typography variant="h4" gutterBottom>
             Crear un nuevo usuario
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
          <Box component={'form'} autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
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
                {...register('name',{required:'El nombre es obligatorio'})}
                error={!!errors.name}
                variant="outlined"
                helperText={errors.name?.message}
                />

                <TextField
                fullWidth
                label="Correo electronico"
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
                {...register("role")}
                variant="outlined"
                select
                defaultValue={'cliente'}
                >
                    <MenuItem value="cliente">Cliente</MenuItem>
                    <MenuItem value="asesor de ventas">asesor de ventas</MenuItem>
                    <MenuItem value="administrador">administrador</MenuItem>

                </TextField>
                <TextField
                fullWidth
                label="contraseña"

                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                    maxLength: {
                      value: 32,
                      message: "La contraseña no puede tener más de 32 caracteres",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                variant="outlined"
                type='password'
                />
                <TextField
                fullWidth
                label="confirmar contraseña"
                {...register("passwordConfirm", {
                    required: "Este campo es obligatorio",
                    validate: (value) =>
                      value === password || "Las contraseñas no coinciden",
                  })}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm?.message}
                type='password'
                variant="outlined"
                />
                
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
                   { !isSubmitting ? 'Crear usuario' : 'Creando usuario...'}
                </Button>
                </Stack>
            </Box>
        </Card>
      </Grid>
    </Grid>
    </Container>
  );

}
