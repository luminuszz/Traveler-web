import {
  Image,
  Input as ChakraInput,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';

interface Props extends Omit<InputProps, 'type'> {
  name: string;
}

export const PasswordInput: FC<Props> = (props) => {
  const { onToggle, isOpen: isPasswordVisible } = useDisclosure({
    defaultIsOpen: false,
  });

  const { currentIcon, currentInputType } = {
    currentIcon: isPasswordVisible
      ? '/passwordHidden.svg'
      : '/passwordVisible.svg',
    currentInputType: isPasswordVisible ? 'text' : 'password',
  };

  return (
    <InputGroup width="auto">
      <InputRightElement
        onClick={onToggle}
        cursor="pointer"
        marginTop="5"
        marginX="2"
      >
        <Image src={currentIcon} />
      </InputRightElement>

      <ChakraInput
        _placeholder={{
          color: 'gray.500',
          fontFamily: 'body',
        }}
        height="72px"
        type={currentInputType}
        {...props}
        background="white"
        borderRadius="2xl"
        borderEndRadius={0}
        borderStartRadius={0}
        border="1px"
        borderStyle="solid"
        borderColor="gray.300"
      />
    </InputGroup>
  );
};
