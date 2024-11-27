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

export const CreateNewUserForm = () => {
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
          <Box component={'form'} noValidate autoComplete="off" >
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
                name="name"
                variant="outlined"
                />

                <TextField
                fullWidth
                label="Correo electronico"
                name="email"
                variant="outlined"
                type='email'
                />
                
                <TextField
                fullWidth
                select
                defaultValue={'cedula de cuidadania'}
                label="Tipo de documento"
                name="typedocument"
                variant="outlined"
                >
                    <MenuItem value="cedula de cuidadania">Cédula de ciudadanía</MenuItem>
                    <MenuItem value="tarjeta de identidad">Tarjeta de identidad</MenuItem>
                    <MenuItem value="cedula de extranjeria">Cédula de extranjería</MenuItem>
                </TextField>
                <TextField
                fullWidth
                label="Numero de documento"
                name="numberId"
                variant="outlined"
                />
                <TextField
                fullWidth
                label="Telefono"
                name="phone"
                variant="outlined"
                />
                
                <TextField
                fullWidth
                label="Role"
                name="role"
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
                name="password"
                variant="outlined"
                />
                <TextField
                fullWidth
                label="confirmar contraseña"
                name="passwordConfirm"
                variant="outlined"
                />
                
            </Box>
            <Stack direction="row" justifyContent="flex-end" mt={'24px'}>
                <Button type="submit" sx={{
                    backgroundColor: '#000',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#454F5B',
                    }
                }}>
                    Crear usuario
                </Button>
                </Stack>
            </Box>
        </Card>
      </Grid>
    </Grid>
    </Container>
  );

}
