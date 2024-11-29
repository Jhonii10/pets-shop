'use client';

import { PETS_LIST } from '@/components/dashboard/ui/secctions/pets/PetsApp';
import { Box, Button, Card, CardHeader, Container, Divider, FormHelperText, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { redirect , useRouter} from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcAddImage } from 'react-icons/fc';
import { IoIosClose } from 'react-icons/io';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export const PetsForm = ({id}) => {

  const pet = PETS_LIST.find((pet) => String(pet.id) === id);

  if (!pet && id !== 'new') {
    redirect('/dashboard/pets/');
  }

  const title = id === 'new' ? 'Crear una nueva mascota' : 'Editar';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    clearErrors,
  } = useForm({
    defaultValues: {
        ...pet,
        images: undefined,     
    }
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (selectedImages.length > 0) {
      clearErrors('images');
    }
  }, [selectedImages, clearErrors]);


  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      setSelectedImages((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    // Lógica para enviar el formulario.
    console.log('Formulario enviado:', data, selectedImages);

    if (id === 'new'){
        toast.success('Mascota creada exitosamente')
        router.replace('/dashboard/pets')
        router.refresh('/dashboard/pets')
        return
    }

    toast.success('Actualizada correctamente');
    router.replace('/dashboard/pets')
    router.refresh('/dashboard/pets')

  };

  return (
    <Container>
      <Stack direction="column" mb={3} mt={2}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Link href={'/dashboard/pets'}>
          <Button sx={{ color: '#000', '&:hover': { backgroundColor: 'rgba(145 158 171 / 0.08)' } }}>
            <MdOutlineKeyboardArrowLeft size={16} />
            <Typography sx={{ marginLeft: '4px' }}>Atrás</Typography>
          </Button>
        </Link>
      </Stack>
      <form noValidate autoComplete="false" onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth:'720px'
        }}>
          <Card sx={{borderRadius:'16px'}}>
            <CardHeader title="Detalles" subheader="Nombre, breve descripción, imagen..." />
            <Divider />
            <Stack display="flex" direction="column" spacing={2} padding="24px" sx={{
                "& .MuiTextField-root": {
                                
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "black",
                                fontWeight: "600",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                border:'1.5px solid black !important'
                            },
                            },
            }}>
              <TextField
                fullWidth
                label="Nombre de la mascota"
                {...register('pet', { required: 'El nombre es obligatorio' })}
                error={!!errors.name}
                variant="outlined"
                helperText={errors.name?.message}
              />

              <TextField
                fullWidth
                label="Descripción"
                {...register('description', { required: 'La descripción es obligatoria' })}
                error={!!errors.description}
                variant="outlined"
                helperText={errors.description?.message}
              />

              <TextField
                fullWidth
                label="Precio"
                {...register('price', { required: 'El precio es obligatorio' })}
                error={!!errors.price}
                variant="outlined"
                helperText={errors.price?.message}
              />

              <TextField
                fullWidth
                label="Tamaño"
                {...register('size', { required: 'El tamaño es obligatorio' })}
                error={!!errors.size}
                variant="outlined"
                helperText={errors.size?.message}
              />

              <TextField
                fullWidth
                label="Existencias"
                {...register('stock', { required: 'Las existencias son obligatorias' })}
                error={!!errors.stock}
                variant="outlined"
                helperText={errors.stock?.message}
              />
            </Stack>
            <Stack display="flex" direction="column" spacing={2} padding="24px">
              <Typography component="h6" variant="subtitle2">
                Imágenes
              </Typography>
              <Box
                role="presentation"
                tabIndex={0}
                sx={{
                  border: '1px dashed #ccc',
                  ...(errors.images && {
                        border: '1px dashed red',
                        backgroundColor: 'rgba(255 86 48 / 0.09)'
                    }),
                  borderRadius: 2,
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': { borderColor: 'black' },
                            
                }}
                onClick={() => document.getElementById('file-input')?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                 
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  multiple
                  tabIndex={-1}
                  style={{ display: 'none' }}
                  {...register('images', {
                    validate:()=>{
                        if(id === 'new'){
                            return selectedImages.length > 0 || 'la imagen es requerida';
                        }

                        return true;
                    }
                  })}
                  onChange={handleFileChange}
                />
                <Stack spacing={1} alignItems="center">
                   <FcAddImage size={48} />

                  <Typography variant="h6" component="div">
                    Soltar o seleccionar archivo
                  </Typography>
                  <Typography variant="body2" component="div">
                    Suelte archivos aquí o haga clic para{' '}
                    <Box component="span" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                      explorar
                    </Box>{' '}
                    su máquina.
                  </Typography>
                </Stack>
                
              </Box>
                { 
                    errors.images && (
                    <FormHelperText error>{errors.images.message}</FormHelperText>
                )}

              <Box
                component="ul"
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                {
                    pet?.imageUrl && [pet?.imageUrl].map((image , index)=>(
                        <Box
                            key={index}
                            sx={{
                            position: 'relative',
                            width: 120,
                            height: 120,
                            borderRadius: 2,
                            overflow: 'hidden',
                            border: '1px solid #ccc',
                            
                            }}
                        >
                        <img
                        src={image}
                        alt={`preview-${index}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        />
                        <Button
                        sx={{
                            position: 'absolute',
                            top: 4,
                            right: 4,
                            minWidth: 'auto',
                            padding: 0.5,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            color: '#fff',
                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                            borderRadius:'50%',
                        }}
                        >
                        <IoIosClose size={18} />
                        </Button>
                        </Box>
                    ))
                }
                {
                    selectedImages.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                        position: 'relative',
                        width: 120,
                        height: 120,
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: '1px solid #ccc',
                        }}
                    >
                        <img
                        src={URL.createObjectURL(image)}
                        alt={`preview-${index}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        />
                        <Button
                        onClick={() => handleRemoveImage(index)}
                        sx={{
                            position: 'absolute',
                            top: 4,
                            right: 4,
                            minWidth: 'auto',
                            padding: 0.5,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            color: '#fff',
                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                            borderRadius:'50%',
                        }}
                        >
                        <IoIosClose size={18} />
                        </Button>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Card>

          <Stack direction="row" justifyContent="end" mt={3}>
            <Button
                type="submit"
                variant="contained"
                color="black"
                disabled={isSubmitting}
                sx={{ px: 4 , backgroundColor: 'black',color:'white'}}            
            >
                {isSubmitting ? 'Guardando...' : 'Guardar'}
            </Button>
          </Stack>

        </Stack>

        
      </form>
    </Container>
  );
};
