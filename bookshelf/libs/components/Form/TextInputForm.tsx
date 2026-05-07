"use client";

import { ChangeEventHandler } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { TextInput } from "./TextInput";

type TextInputProps = {
  name: string;
  label: string;
  isRequired?: boolean;
  onChange?: ChangeEventHandler;
};

type Props = TextInputProps & Pick<UseControllerProps, "rules">;

export const TextInputForm = ({ name, rules, onChange, ...rest }: Props) => {
  const {
    field: { value, ref, onChange: onFormChange },
    fieldState: { error },
  } = useController({ name, rules });

  const isValid = !error;

  const handleChange: ChangeEventHandler = () => {
    onFormChange();
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <TextInput
      name={name}
      ref={ref}
      onChange={handleChange}
      isValid={isValid}
      errorText={isValid ? undefined : "error text"}
      {...rest}
    />
  );
};
