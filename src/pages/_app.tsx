import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { theme } from 'themes';

import 'styles/styles.css';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default CustomApp;
