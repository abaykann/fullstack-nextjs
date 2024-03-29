import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ValidationSchema from '../../../components/validation/updateValidation';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Router from 'next/router';
import constants from '../../../common/constants/constants';
import { authPage } from '../../../middlewares/authorizationPage';

import Cookie from 'js-cookie';

// export const getStaticPaths = async () => {

//     // const { token } = await authPage(ctx);
//     const aaa = Cookie.get('token')
//     console.log(aaa)

//     // console.log(token)
//     const res = await fetch(`${constants.BASE_URL}/api/productsV2/`, {
//       headers: {
//         'Authorization': 'Bearer ' + aaa
//       }
//     });

//     const data = await res.json();
  
//     // map data to an array of path objects with params (id)
//     const paths = data.data.map(product => {
//       return {
//         params: { id: product.id.toString() }
//       }
//     })
  
//     return {
//       paths,
//       fallback: false
//     }
//   }

//   export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`${constants.BASE_URL}/api/productsV2/detail/` + id);

//     const data = await res.json();
  
  
//     return {
//       props: { productData: data.data }
//     }
//   }
  
//   const Details = ({ productData }) => {
//       console.log(productData)

//       const {
//         register,
//         control,
//         handleSubmit,
//         formState: { errors }
//       } = useForm({
//         resolver: yupResolver(ValidationSchema)
//       });

//       const [image, setImage] = useState(productData.imageUrl);
//       const [createObjectURL, setCreateObjectURL] = useState(productData.imageUrl);
    
//       const uploadToClient = (event) => {
//         if (event.target.files && event.target.files[0]) {
//           const i = event.target.files[0];
    
//           setImage(i);
//           setCreateObjectURL(URL.createObjectURL(i));
//         }
//       };

      

//       const Input = styled('input')({
//         display: 'none',
//       });


//       const onSubmit = async (data) => {
//         const formData = new FormData()
//         formData.append("file", data.picture[0])
//         formData.append("productName", data.productName)
//         formData.append("price", data.price)
//         formData.append("discount", data.discount)
//         formData.append("categoryId", data.categoryId)
    
//         const res = await fetch(`${constants.BASE_URL}/api/productsV2/update` + productData.id, {
//           method: "PUT",
//           body: formData
//         }).then(res => res.json())
//         // alert(JSON.stringify(res))
//         Router.push('/products');
//       }

//     return (
//     <Fragment>
//         <Paper>
//           <Box px={3} py={2}>
//             <Typography variant="h6" align="center" margin="dense">
//               React Hook Form - Material UI - Validation
//             </Typography>
  
//             <Grid container spacing={1}>
//               <Grid item xs={12} sm={12}>
//                 <TextField
//                   required
//                   id="productName"
//                   name="productName"
//                   label="Product Name"
//                   fullWidth
//                   margin="dense"
//                   defaultValue={productData.productName}
//                   {...register('productName')}
//                   error={errors.productName ? true : false}
//                 />
//                 <Typography variant="inherit" color="textSecondary">
//                   {errors.productName?.message}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                    required
//                    id="price"
//                    name="price"
//                    label="price"
//                    defaultValue={productData.price}
//                    fullWidth
//                    margin="dense"
//                    {...register('price')}
//                    error={errors.price ? true : false}
//                  />
//                  <Typography variant="inherit" color="textSecondary">
//                    {errors.price?.message}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                    required
//                    id="discount"
//                    name="discount"
//                    label="discount"
//                    fullWidth
//                    defaultValue={productData.discount}
//                    margin="dense"
//                    {...register('discount')}
//                    error={errors.discount ? true : false}
//                  />
//                  <Typography variant="inherit" color="textSecondary">
//                    {errors.discount?.message}
//                 </Typography>
//               </Grid>
              
//               <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//             <InputLabel id="categoryId">Category Name</InputLabel>
//             <Select
//               id="categoryId"
//               name="categoryId"
//               label="categoryId"
//               fullWidth
//               defaultValue={productData.categoryId}
//               margin="dense"
//               {...register('categoryId')}
//               error={errors.categoryId ? true : false}>
//               <MenuItem value={1}>Bunga Papan</MenuItem>
//               <MenuItem value={2}>Bunga Meja</MenuItem>
//               <MenuItem value={3}>Hand Buket</MenuItem>
//               <MenuItem value={4}>Standing Flower</MenuItem>
//             </Select>
//             <Typography variant="inherit" color="textSecondary">
//               {errors.categoryId?.message}
//            </Typography>
//           </FormControl>
//          </Grid>
//          <Grid item xs={12} sm={6}> 
        

//  <input {...register('picture')} type="file" name="picture" onChange={uploadToClient}/>
//       {errors.picture && <p>{errors.picture.message}</p>}


// </Grid>
// <Grid item xs={12} sm={6}> 

// <Avatar 
//   variant="square"
//   alt=""
//   src={createObjectURL}
//   sx={{ width: 600, height: 400 }}
// />
// </Grid>

//          </Grid>
  
//             <Box mt={3}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit(onSubmit)}
//               >
//                 Submit
//               </Button>
//             </Box>
//           </Box>
//         </Paper>
//       </Fragment>

//     );
//   }
  
//   export default Details;



export async function getServerSideProps(ctx) {
  const { token } = await authPage(ctx);

  const { id } = ctx.query;

  const postReq = await fetch(`${constants.BASE_URL}/api/productsV2/detail/` + id, {
    headers: {
        'Authorization': 'Bearer ' + token
    }
  });

  const res = await postReq.json();
//   console.log(res.data);

  return {
      props: {
          token,
          data: res.data
          
      }
  }
}


  const Details = (props ) => {
      const productData = props.data
      console.log('productdata:', productData)
      console.log(props.token)

      const {
        register,
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(ValidationSchema)
      });

      const [image, setImage] = useState(productData.imageUrl);
      const [createObjectURL, setCreateObjectURL] = useState(productData.imageUrl);
    
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
        const myid= productData.id
        console.log('myid:', myid)
    
        const res = await fetch(`${constants.BASE_URL}/api/productsV2/update/` + productData.id, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token
        },
          body: formData
        }).then(res => res.json())
        // alert(JSON.stringify(res))
        console.log(res)
        Router.push('/products');
      }

    return (
    <Fragment>
        <Paper>
          <Box px={3} py={2}>
            <Typography variant="h6" align="center" margin="dense">
              Edit Product
            </Typography>
  <br/>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="productName"
                  name="productName"
                  label="Product Name"
                  fullWidth
                  margin="dense"
                  defaultValue={productData.productName}
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
                   defaultValue={productData.price}
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
                   defaultValue={productData.discount}
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
              defaultValue={productData.categoryId}
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
</Grid>

         </Grid>
<br/>

<div dir="rtl">
            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Box>
            </div>
          </Box>
        </Paper>
      </Fragment>


    );
  }
  
  export default Details;
