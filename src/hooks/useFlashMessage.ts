import { createStandaloneToast, AlertStatus } from '@chakra-ui/react';
import { theme } from 'themes';

export const useFlashMessage = (): Function => {
  const toast = createStandaloneToast({
    theme,
    colorMode: 'dark',
  });

  return (message: string, type: AlertStatus) =>
    toast({
      description: message,
      duration: 3000,
      position: 'top',
      status: type,
    });
};
