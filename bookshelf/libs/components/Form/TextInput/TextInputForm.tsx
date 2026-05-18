"use client";

import { ChangeEventHandler, useCallback } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { TextInput } from "./TextInput";

type TextInputProps = {
  name: string;
  label: string;
  isRequired?: boolean;
  onChange?: ChangeEventHandler;
  value?: string;
};

type Props = TextInputProps & Pick<UseControllerProps, "rules">;

export const TextInputForm = ({ name, rules, onChange, ...rest }: Props) => {
  const {
    field: { onChange: onFormChange, value, ref },
    fieldState: { error },
  } = useController({ name, rules });

  const isValid = !error;

  const handleChange: ChangeEventHandler = useCallback(
    (e) => {
      onFormChange(e);
      if (onChange) {
        onChange(e);
      }
    },
    [onFormChange, onChange],
  );

  return (
    <TextInput
      {...rest}
      name={name}
      isValid={isValid}
      errorText={isValid ? undefined : "error text"}
      value={value}
      onChange={handleChange}
      ref={ref}
    />
  );
};
