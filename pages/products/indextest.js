import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NumberFormat from 'react-number-format';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Router from 'next/router';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/productsV2');
    const data = await res.json();
    // console.log(res.status)

    return {
      props: {
        products: data.data,
        statusCode: res.status
      },
    };
  };
  

  // export default function PostIndex(props) {
  const ProductList = ({ products, statusCode }) => {
    console.log(products)
   

    if(statusCode !== 200){
        return (
            <p>something is wrong</p>
        )
    }
  
    return (
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
              <TableCell align="center">Action</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  // }
   
  export default ProductList;






    