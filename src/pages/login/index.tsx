import {
  Flex,
  Grid,
  Heading,
  Image,
  Checkbox,
  HStack,
  Link,
  Center,
  Spacer,
} from '@chakra-ui/react';
import { Input, Button, PasswordInput } from 'components';
import { useFlashMessage, useForm } from 'hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useSetRecoilState } from 'recoil';
import { userLoginRequestState } from 'store/atoms';
import { LoginRequest, loginSchema } from 'validations';

const LoginPage: NextPage = () => {
  const message = useFlashMessage();
  const router = useRouter();
  const setLoginRequest = useSetRecoilState(userLoginRequestState);

  const onSuccess = (values: LoginRequest): void => {
    setLoginRequest(values);
    router.push('/');
  };

  const {
    handleChange,
    loading,
    handleSubmit,
    setFieldValue,
    formState,
  } = useForm<LoginRequest>({
    fields: {
      email: '',
      password: '',
      remember: true,
    },
    onError: (error) => message(error, 'error'),
    onSuccess,
    validation: loginSchema,
  });

  const isDisabled = !formState.password || !formState.email;

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 1fr"
      justifyContent="center"
      alignItems="center"
    >
      <Flex width="100%" height="100%" visibility={['hidden', 'visible']}>
        <Image src="/loginImage.png" objectFit="cover" alt="Login Image" />
      </Flex>

      <Center flexDir="column">
        <Flex flexDir="column" width="100%" maxWidth="470px">
          <Heading
            fontWeight="semibold"
            lineHeight="6xl"
            fontFamily="heading"
            fontSize="4xl"
            color="blue.700"
            textAlign="left"
            marginBottom="7xl"
          >
            Fazer login
          </Heading>
          <Spacer height="44px" />
          <Input
            name="email"
            placeholder="E-mail"
            type="email"
            autoComplete="email"
            isRequired
            onChange={handleChange}
          />
          <PasswordInput
            name="password"
            placeholder="senha"
            isRequired
            onChange={handleChange}
          />
          <HStack
            marginY={5}
            align="center"
            justify="space-between"
            spacing={10}
          >
            <Checkbox
              onChange={({ target }) =>
                setFieldValue('remember', target.checked)
              }
              color="gray.500"
              colorScheme="green"
              fontSize="sm"
              defaultChecked
              name="remember"
              fontFamily="body"
            >
              Lembrar-me
            </Checkbox>
            <Link textDecor="none" fontFamily="body" color="gray.500" href="/">
              Esqueci minha senha
            </Link>
          </HStack>

          <Button
            disabled={isDisabled}
            onClick={handleSubmit}
            isLoading={loading}
          >
            Acessar plataforma
          </Button>
        </Flex>
      </Center>
    </Grid>
  );
};

export default LoginPage;
