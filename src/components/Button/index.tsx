import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

interface Props extends ButtonProps { }

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <ChakraButton
      cursor="pointer"
      _hover={{
        background: 'orange.300',
      }}
      height="72px"
      background="orange.500"
      border="none"
      color="white"
      width="100%"
      borderRadius="2xl"
      fontFamily="body"
      fontSize="18px"
      fontWeight="500"
      lineHeight={10}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
