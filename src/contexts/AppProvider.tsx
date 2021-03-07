import { ThemeProvider as ChakraUiProvider } from '@chakra-ui/react';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { theme } from 'themes';

export const AppProvider: FC = ({ children }) => (
  <RecoilRoot>
    <ChakraUiProvider theme={theme}>{children}</ChakraUiProvider>
  </RecoilRoot>
);
