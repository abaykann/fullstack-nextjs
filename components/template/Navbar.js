import Link from 'next/link';
import Cookie from 'js-cookie';
import Router from 'next/router';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Navbar() {
    function logoutHandler(e) {
        e.preventDefault();

        Cookie.remove('token');

        Router.replace('/auth/login');
    }

    return (
        <div dir="rtl">
            {/* <Link href="/posts"><a>Posts</a></Link>
            &nbsp; | &nbsp; */}
            {/* <Link href="/products/create"><a>Create Post</a></Link> */}

            {/* <Stack direction="row" spacing={2}> */}
            <Box sx={{ p: 2 }}>
      <Button  href="/products/create" variant="contained">
        ADD Product
      </Button>
      </Box>
    {/* </Stack> */}
          
        </div>
    );
}
