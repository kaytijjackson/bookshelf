"use client";

import { ChangeEvent, ChangeEventHandler, forwardRef, useId } from "react";
import { VStack } from "../Stacks";
import { FormComponentLabel } from "./FormComponentLabel";

type TextInputProps = {
  name: string;
  label: string;
  isRequired?: boolean;
  isValid: boolean;
  onChange?: ChangeEventHandler;
  errorText: string | undefined;
  value?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { name, label, isRequired, onChange, isValid, errorText, value, ...props },
    ref,
  ) => {
    const id = useId();
    const onChangePreventDefault = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }

      e.preventDefault();
    };

    return (
      <VStack spacing={4}>
        <FormComponentLabel id={id} label={label} isRequired={isRequired} />
        <input
          {...props}
          name={name}
          value={value}
          onChange={onChangePreventDefault}
          aria-labelledby={id}
          ref={ref}
        />
        {!isValid && <span>{errorText}</span>}
      </VStack>
    );
  },
);

TextInput.displayName = "TextInput";
