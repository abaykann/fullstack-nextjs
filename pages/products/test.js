import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ValidationSchema from './validation';
import ReactHookFormSelect from '../../components/dropdown/ReactHookFormSelect';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const CreateProduct = () => {
      const {
        register,
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(ValidationSchema)
      });

      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      };

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
                  id="fullname"
                  name="fullname"
                  label="Full Name"
                  fullWidth
                  margin="dense"
                  {...register('fullname')}
                  error={errors.fullname ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.fullname?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  margin="dense"
                  {...register('username')}
                  error={errors.username ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.username?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  margin="dense"
                  {...register('email')}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="dense"
                  {...register('password')}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  margin="dense"
                  {...register('confirmPassword')}
                  error={errors.confirmPassword ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.confirmPassword?.message}
                </Typography>
              </Grid>

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

          
              
            </Grid>
  
            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Paper>
      </Fragment>
    );
  };
  
  export default CreateProduct;