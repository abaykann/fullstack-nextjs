import React, { useState, useEffect, Fragment } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import { unauthPage } from '../../middlewares/authorizationPage';
import Link from 'next/link';
import ValidationSchema from '../../components/validation/loginValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import {Grid, TextField,  Button, Typography, Box } from '@mui/material';
import Layout from '../../components/template/Layout';

export async function getServerSideProps(ctx) {
    await unauthPage(ctx);

    return { props: {} }
}

// export default function Login() {
//     const [fields, setFields] = useState({
//         email: '',
//         password: ''
//     });

//     const [status, setStatus] = useState('normal');

//     async function loginHandler(e) {
//         e.preventDefault();
        
//         setStatus('loading');

//         const loginReq = await fetch('/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(fields)
//         });

//         if(!loginReq.ok) return setStatus('error ' + loginReq.status);

//         const loginRes = await loginReq.json();

//         setStatus('success');

//         Cookie.set('token', loginRes.token);

//         Router.push('/posts');
//     }

//     function fieldHandler(e) {
//         const name = e.target.getAttribute('name');

//         setFields({
//             ...fields,
//             [name]: e.target.value
//         });
//     }

    
//     return (
//         <div style={{
//             margin: '0',
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)'
//         }}>
//     <form onSubmit={loginHandler.bind(this)}>
// <Card sx={{ minWidth: 275 }}>
//  <CardContent>
//  <h1>Login</h1>
            
            
//                 <input onChange={fieldHandler.bind(this)} type="text" name="email" placeholder="Email" />
//                 <input onChange={fieldHandler.bind(this)} type="password" name="password" placeholder="Password" />

//                 <button type="submit">
//                     Login
//                 </button>

//                 <div>Status: {status}</div>

//                 {/* <Link href="/auth/register"><a>Register</a></Link> */}
            
//         </CardContent>
//         <CardActions>
//    <Button size="small">Learn More</Button>
//  </CardActions>
// </Card>
// </form>
// </div>
//     );
// }





// export default function Login() {
//     const [fields, setFields] = useState({
//         email: '',
//         password: ''
//     });

//     const [status, setStatus] = useState('normal');

//     async function loginHandler(e) {
//         e.preventDefault();
        
//         setStatus('loading');

//         const loginReq = await fetch('/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(fields)
//         });

//         if(!loginReq.ok) return setStatus('error ' + loginReq.status);

//         const loginRes = await loginReq.json();

//         setStatus('success');

//         Cookie.set('token', loginRes.token);

//         Router.push('/posts');
//     }

//     function fieldHandler(e) {
//         const name = e.target.getAttribute('name');

//         setFields({
//             ...fields,
//             [name]: e.target.value
//         });
//     }


const login = () =>{
    const {
        register,
        control,
        handleSubmit,
        formState: { errors}
      } = useForm({
        resolver: yupResolver(ValidationSchema)
      });

      const [status, setStatus] = useState();
      
      const onSubmit = async (data) => {
            const rawResponse = await fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                    email: data.email,
                    password: data.password
                })
            });
            if(!rawResponse.ok) return setStatus('Email or password is wrong');
            const loginRes = await rawResponse.json();
            Cookie.set('token', loginRes.token);
            Router.push('/');
          
            console.log(loginRes);
          
      }
    
    return (
        <div style={{
            margin: '0',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
   

<Fragment>

    <Box px={3} py={2}>
        <Typography container spacing={1} align="center">
            <LockTwoToneIcon/>
        </Typography>
    <Typography container spacing={1} variant="h6" align="center" margin="dense" marginBottom='20px'>
              Sign In
    </Typography>
    <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="email"
                  fullWidth
                  margin="dense"
                  {...register('email')}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </Grid>

    
            <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="password"
                  fullWidth
                  type="password"
                  margin="dense"
                  {...register('password')}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>

              

        </Grid>

        {status}


    </Box>

    <Box px={3} py={2}>
        <Grid>
            <Grid item xs={12} sm={12}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            
        </Grid>
        </Box>

</Fragment>
</div>
    );
}

export default login;
