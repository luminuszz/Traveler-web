import { AppProvider } from 'contexts/AppProvider';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import 'styles/styles.css';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default CustomApp;
