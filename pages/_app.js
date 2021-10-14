// import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import DefaultTemplate from '../components/template/default'
import Com from '../components/template/com'
import { useRouter } from 'next/router';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // const { asPath } = useRouter();
  const router = useRouter();
  const showTheme = router.pathname !== '/auth/login' ? false : true;


  // return (
  //   <CacheProvider value={emotionCache}>
  //     <Head>
  //       <title>Abimanyu Florist CMS</title>
  //       <meta name="viewport" content="initial-scale=1, width=device-width" />
  //     </Head>
  //     <ThemeProvider theme={theme}>
  //       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  //       <CssBaseline />
  //       {/* {asPath !== 'auth/login' && <Com />} */}
  //       {showTheme && <Com />}
  //       {/* <DefaultTemplate> */}
  //         <Component {...pageProps} />
  //       {/* </DefaultTemplate> */}

  //     </ThemeProvider>
  //   </CacheProvider>
  // );

  return (
    <CacheProvider value={emotionCache}>
    <Head>
      <title>Abimanyu Florist CMS</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
    <CssBaseline />
       <div>
      {(() => {
        if (showTheme) {
          return (
            <Component {...pageProps} />         
          )
        } else {
          return (
        <DefaultTemplate>
          <Component {...pageProps} />
        </DefaultTemplate>
          )
        }
      })()}
    </div>
    </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};