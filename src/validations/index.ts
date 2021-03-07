import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
  remember: Yup.boolean(),
});

type LoginRequest = Yup.InferType<typeof loginSchema>;

export { loginSchema };
export type { LoginRequest };
