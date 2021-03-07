import { Input as ChakraInput, InputProps } from '@chakra-ui/react';
import { FC } from 'react';

interface Props extends InputProps {
  name: string;
}

export const Input: FC<Props> = (props) => {
  return (
    <ChakraInput
      _placeholder={{
        color: 'gray.500',
        fontFamily: 'body',
      }}
      width="auto"
      height="72px"
      background="white"
      borderRadius="2xl"
      borderEndRadius={0}
      borderStartRadius={0}
      border="1px"
      borderStyle="solid"
      borderColor="gray.300"
      {...props}
    />
  );
};
