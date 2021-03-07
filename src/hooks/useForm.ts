/* eslint-disable no-unused-vars */
import { useState, ChangeEventHandler, ChangeEvent } from 'react';
import * as Yup from 'yup';

type InputEvent = ChangeEvent<HTMLInputElement>;

interface ObjectField {
  [key: string]: string;
}
interface OnChangeArgs {
  name: string;
  value: any;
}

interface HooksArgs<FormFields> {
  fields: FormFields;
  validation?: Yup.AnyObjectSchema;
  onSuccess: (data: FormFields) => void;
  onError?: (error: ObjectField | string) => void;
}

interface HooksReturn<FormFields> {
  loading: boolean;
  errors: ObjectField | string;
  handleSubmit: () => void;
  handleChange: (event: InputEvent) => void;
  setFieldValue: (name: keyof FormFields, value: any) => void;
  formState: FormFields;
}

export function useForm<FormFields extends { [key: string]: any }>(
  args: HooksArgs<FormFields>
): HooksReturn<FormFields> {
  // eslint-disable-next-line prettier/prettier
  const { fields, onSuccess, validation, onError = () => { } } = args;
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState<FormFields>(fields);
  const [errors, setErrors] = useState<ObjectField | string>('');

  const handleChange = ({ target }: InputEvent): void => {
    setFormState((old) => ({ ...old, [target.name]: target.value }));
  };

  const setFieldValue = <T>(name: string, value: T): void =>
    setFormState((old) => ({ ...old, [name]: value }));

  const handleSubmit = async (): Promise<void> => {
    try {
      setErrors({});
      setLoading(true);
      if (validation) {
        await validation.validate(formState, { abortEarly: true });
      }

      onSuccess(formState);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        onError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleSubmit,
    errors,
    handleChange,
    formState,
    setFieldValue,
  };
}
