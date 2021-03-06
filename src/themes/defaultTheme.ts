import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    orange: {
      '500': '#F25D27',
      '300': '#FFA585',
    },
    blue: {
      '500': '#115D8C',
      '700': '#123952',
    },

    white: {
      '500': '#F5F8FA',
    },

    gray: {
      '700': '#617480',
      '500': '#A0ACB3',
      '300': '#DCE2E6',
    },
    red: {
      '500': '#DE3838',
    },
    green: {
      '300': '#DCF5DD',
      '500': '#51B853',
    },
    yellow: {
      '300': '#EFB866',
    },
  },

  fonts: {
    heading: 'Barlow',
    body: 'Heebo',
  },
});
