'use client'

import { useController, UseControllerProps } from "react-hook-form";
import { NumberInput, NumberInputProps } from "./NumberInput";
import { ChangeEventHandler } from "react";

type Props = Pick<UseControllerProps, "rules"> & NumberInputProps;

export const NumberInputForm = ({ name, rules, ...props }: Props) => {
  const {
    field: { onChange: onFormChange, value, ref },
    fieldState: { error },
  } = useController({ name, rules });
  const isValid = !error;

  const handleChange: ChangeEventHandler = (e) => {
    onFormChange(e);
    if (onFormChange) {
      onFormChange(e);
    }
  };

  return (
    <NumberInput
      {...props}
      name={name}
      onChange={handleChange}
      isValid={isValid}
      errorText=""
      value={value}
      ref={ref}
    />
  );
};
