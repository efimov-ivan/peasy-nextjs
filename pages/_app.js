import { useEffect } from "react";
import { NextUIProvider, createTheme } from '@nextui-org/react';
import Layout from '../components/layouts/layout';
import { AnimatePresence } from 'framer-motion';
import '../assets/css/styles.sass';

const theme = createTheme({
  type: "default",
  theme: {
    colors: {
      primary: '#3BB29B',
      primaryDark: '#2D4C3A',
      //customGreen: '#3BB29B',
      titleGreen: '#2D4C3A',
      limeGreen: '#BDD81E',
      seafoamGreen: '#70B793',
      //foreground: '#3BB29B',
      success: '#3BB29B',
      successDark: '#3BB29B',
      gradient: 'linear-gradient(112deg, #BDD81E -25%, #89CEA6 -10%, #3BB29B 80%)',
    }
  }
})

function MyApp({ Component, pageProps, router }) {

  useEffect(() => storePathValues, [router.asPath]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
    // console.log(storage);
  }


  return (
    <NextUIProvider theme={theme}>
      <Layout>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component  {...pageProps} key={router.route} />
      </AnimatePresence>
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;