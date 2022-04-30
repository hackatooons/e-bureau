
import React, { Fragment } from 'react';
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import ChatwootWidget from '../components/ChatwootWidget';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Fragment>
        <ChatwootWidget />
        <Component {...pageProps} />
      </Fragment>
    </ChakraProvider>
  )
}

export default MyApp
