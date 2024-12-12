import { useState, useCallback } from 'react';

interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
}

export function useForm<T extends Record<string, any>>({ 
  initialValues, 
  onSubmit 
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  }, [onSubmit, values]);

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
  };
}