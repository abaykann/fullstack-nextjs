import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ValidationSchema from '../../components/validation/productValidation';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Router from 'next/router';
import constants from '../../common/constants/constants';

const CreateProduct = () => {
      const {
        register,
        control,
        handleSubmit,
        formState: { errors}
      } = useForm({
        resolver: yupResolver(ValidationSchema)
      });

      const [image, setImage] = useState(null);
      const [createObjectURL, setCreateObjectURL] = useState(null);
    
      const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
    
          setImage(i);
          setCreateObjectURL(URL.createObjectURL(i));
        }
      };

      

      const Input = styled('input')({
        display: 'none',
      });


      const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.picture[0])
        formData.append("productName", data.productName)
        formData.append("price", data.price)
        formData.append("discount", data.discount)
        formData.append("categoryId", data.categoryId)
    
        const res = await fetch(`${constants.BASE_URL}/api/productsV2/create`, {
          method: "POST",
          body: formData
        }).then(res => res.json())
        Router.push('/products');
        // alert(JSON.stringify(res))
      }

      

    return (
      <Fragment>
        <Paper>
          <Box px={3} py={2}>
            <Typography variant="h6" align="center" margin="dense">
              React Hook Form - Material UI - Validation
            </Typography>
  
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="productName"
                  name="productName"
                  label="Product Name"
                  fullWidth
                  margin="dense"
                  {...register('productName')}
                  error={errors.productName ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.productName?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                   required
                   id="price"
                   name="price"
                   label="price"
                   fullWidth
                   margin="dense"
                   {...register('price')}
                   error={errors.price ? true : false}
                 />
                 <Typography variant="inherit" color="textSecondary">
                   {errors.price?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                   required
                   id="discount"
                   name="discount"
                   label="discount"
                   fullWidth
                   margin="dense"
                   {...register('discount')}
                   error={errors.discount ? true : false}
                 />
                 <Typography variant="inherit" color="textSecondary">
                   {errors.discount?.message}
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
            <InputLabel id="categoryId">Category Name</InputLabel>
            <Select
              id="categoryId"
              name="categoryId"
              label="categoryId"
              fullWidth
              margin="dense"
              {...register('categoryId')}
              error={errors.categoryId ? true : false}>
              <MenuItem value={1}>Bunga Papan</MenuItem>
              <MenuItem value={2}>Bunga Meja</MenuItem>
              <MenuItem value={3}>Hand Buket</MenuItem>
              <MenuItem value={4}>Standing Flower</MenuItem>
            </Select>
            <Typography variant="inherit" color="textSecondary">
              {errors.categoryId?.message}
           </Typography>
          </FormControl>
         </Grid>
         <Grid item xs={12} sm={6}> 
        

 <input {...register('picture')} type="file" name="picture" onChange={uploadToClient}/>
      {errors.picture && <p>{errors.picture.message}</p>}


</Grid>
<Grid item xs={12} sm={6}> 

<Avatar 
  variant="square"
  alt=""
  src={createObjectURL}
  sx={{ width: 600, height: 400 }}
/>

                {/* <img src={createObjectURL} /> */}
</Grid>

         </Grid>
  
            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Fragment>
    );
  };
  
  export default CreateProduct;