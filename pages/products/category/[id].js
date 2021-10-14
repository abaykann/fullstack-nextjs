import React, { useState } from 'react';
import constants from "../../../common/constants/constants";
import Router from 'next/router';
import Navbar from "../../../components/template/Navbar";
import NumberFormat from 'react-number-format';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { authPage } from "../../../middlewares/authorizationPage";
import {Table,TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ImageList,
    ImageListItem, Button, Stack} from '@mui/material';

// export const getStaticPaths = async () => {


//     const constanttoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJheml6YWtiYXJhbEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwMzgzNjYsImV4cCI6MTYzNDY0MzE2Nn0.kRMQ-JLq55LCT7tVeTmYTgjIfOlzdDXEqx9vHwl2ynM'
//     const res = await fetch(`${constants.BASE_URL}/api/productsV2`, {
//       headers: {
//         'Authorization': 'Bearer ' + constanttoken
//     }
//     });
//     const data = await res.json();
  
  
//     // map data to an array of path objects with params (id)
//     const paths = data.data.map(products => {
//       return {
//         params: { id: products.categoryId.toString() }
//       }
//     })

//     return {
//       paths,
//       fallback: false
//     }
//   }

  
//   export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     console.log(id)
//     // const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
//     const res = await fetch(`${constants.BASE_URL}/api/productsV2/category/` + id, {
//         // headers: {
//         //     'Authorization': 'Bearer ' + token
//         // }
//     });
//     const resdata = await res.json();
//     console.log(resdata)
  
//     return {
//       props: { products: resdata.data }
//     }
//   }
  
//   const Details = ({ products }) => {

//     async function deleteHandler(id, e) {
//         e.preventDefault();

//         // const { token } = props;

//         const ask = confirm('Apakah data ini akan dihapus?');

//         if(ask) {
//             // const deletePost = await fetch('/api/productsV2/delete' + id, {
//             //     method: 'DELETE',
//             //     headers: {
//             //         'Authorization': 'Bearer ' + token
//             //     }
//             // });

//             const deleteProduct = await fetch(`${constants.BASE_URL}/api/productsV2/detail` + id, {
//                 method: 'DELETE',
              
//             });

//             const res = await deleteProduct.json();

//             console.log(deleteProduct)

//             const productsFiltered = products.filter(product => {
//                 return product.id !== id && product;
//             });

//             setProducts(productsFiltered);
//         } 
//     }

//     function editHandler(id) {
//         Router.push(`${constants.BASE_URL}/products/edit/` + id);
//     }
//     return (
//     <div>
//           <Navbar />
//             <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Product Name</TableCell>
//               <TableCell align="center">price</TableCell>
//               <TableCell align="center">Discount(%)</TableCell>
//               <TableCell align="center">Net Price</TableCell>
//               <TableCell align="center">Category Id</TableCell>
//               <TableCell align="left">Product Image</TableCell>
//               <TableCell align="left">Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map((data) => (
//               <TableRow
//                 key={data.id}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {data.productName}
//                 </TableCell>
//                 <TableCell align="center">
//                 <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}  style ={{
//                       //  textDecoration: 'line-through',
//                        color: 'red',
//                     }}/></TableCell>
//                 <TableCell align="center">{data.disc}</TableCell>
//                 <TableCell align="center">
//                 <NumberFormat value={data.netPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/></TableCell>
               
//                 <TableCell align="center">{data.categoryId}</TableCell>
//                 <TableCell align="right">
//                 <ImageList sx={{ width: 250, height: 150, overflowY:'hidden', align:'right' }}>
//                   <ImageListItem>
//                     <img
//                       src={`${data.imageUrl}?w=248&fit=crop&auto=format`}
//                       srcSet={`${data.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                       loading="lazy"
//                     />
//                   </ImageListItem>
//                 </ImageList>
//                 </TableCell>
//                 <TableCell>
                   

//                   <Stack direction="row"  spacing={2}>
//                     <Button
//                         variant="contained"
//                         color="success"
//                         onClick={editHandler.bind(this, data.id)}
//                         startIcon={<EditIcon />}>          
//                         Edit
//                     </Button>

//                     <Button
//                         variant="contained"
//                         color="error"
//                         onClick={deleteHandler.bind(this, data.id)}
//                         startIcon={<DeleteIcon />}>          
//                         Delete
//                     </Button>
//                   </Stack>

//                 </TableCell>
//               </TableRow>
//              ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
      
//     );
//   }
  
//   export default Details;



export async function getServerSideProps(ctx) {
  const { token } = await authPage(ctx);
  const { id } = ctx.query;

  console.log(id, 'token:', token)
  const res = await fetch(`${constants.BASE_URL}/api/productsV2/category/` + id, {
     headers: {
          'Authorization': 'Bearer ' + token
     }
  });

  const data = await res.json()

  return {
    props: {
      products: data.data ,
      token,
      id,
      fallback: false
    },
  }
}

function Blog( props ) {
  // console.log('viiew:', props.token, props.id)
  const [products, setProducts] = useState(props.products);
  const token = props.token
  const id = props.id
  console.log(token, 'params:', id)
  // const products = props.products


  async function deleteHandler(id, e) {
    e.preventDefault();

    // const { token } = props;

    const ask = confirm('Apakah data ini akan dihapus?');

    if(ask) {
        const deleteProduct = await fetch('/api/productsV2/delete/' + id, {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + token
        }
        
      });

        const res = await deleteProduct.json();

        console.log(deleteProduct)

        const productsFiltered = products.filter(product => {
            return product.id !== id && product;
        });

        setProducts(productsFiltered);
    } 
}

function editHandler(id) {
    Router.push(`${constants.BASE_URL}/products/edit/` + id);
}


  return (
    <div>
          <Navbar />
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">price</TableCell>
              <TableCell align="center">Discount(%)</TableCell>
              <TableCell align="center">Net Price</TableCell>
              <TableCell align="center">Category Id</TableCell>
              <TableCell align="left">Product Image</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((data) => (
              <TableRow
                key={data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.productName}
                </TableCell>
                <TableCell align="center">
                <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}  style ={{
                      //  textDecoration: 'line-through',
                       color: 'red',
                    }}/></TableCell>
                <TableCell align="center">{data.disc}</TableCell>
                <TableCell align="center">
                <NumberFormat value={data.netPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/></TableCell>
               
                <TableCell align="center">{data.categoryId}</TableCell>
                <TableCell align="right">
                <ImageList sx={{ width: 250, height: 150, overflowY:'hidden', align:'right' }}>
                  <ImageListItem>
                    <img
                      src={`${data.imageUrl}?w=248&fit=crop&auto=format`}
                      srcSet={`${data.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      loading="lazy"
                    />
                  </ImageListItem>
                </ImageList>
                </TableCell>
                <TableCell>
                   

                  <Stack direction="row"  spacing={2}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={editHandler.bind(this, data.id)}
                        startIcon={<EditIcon />}>          
                        Edit
                    </Button>

                    <Button
                        variant="contained"
                        color="error"
                        onClick={deleteHandler.bind(this, data.id)}
                        startIcon={<DeleteIcon />}>          
                        Delete
                    </Button>
                  </Stack>

                </TableCell>
              </TableRow>
             ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}


export default Blog