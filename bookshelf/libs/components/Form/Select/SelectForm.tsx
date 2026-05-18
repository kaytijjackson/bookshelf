"use client";

import { useController, UseControllerProps } from "react-hook-form";
import { Select } from "./Select";
import { ChangeEventHandler } from "react";

type OptionType = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  name: string;
  label: string;
  isValid?: boolean;
  value?: string;
  isRequired?: boolean;
  errorText?: string;
  options: OptionType[];
  onChange?: ChangeEventHandler;
};

type Props = Pick<UseControllerProps, "rules"> & SelectProps;

export const SelectForm = ({ name, rules, onChange, ...props }: Props) => {
  const {
    field: { value, ref, onChange: onFormChange },
    fieldState: { error },
  } = useController({ name, rules });
  const isValid = !error;

  const handleChange: ChangeEventHandler = (e) => {
    onFormChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Select
      {...props}
      name={name}
      isValid={isValid}
      errorText=""
      value={value}
      onChange={handleChange}
      ref={ref}
    />
  );
};
