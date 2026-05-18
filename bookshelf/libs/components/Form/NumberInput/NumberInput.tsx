import { ChangeEventHandler, forwardRef, useId } from "react";
import { FormComponentLabel } from "../FormComponentLabel";
import { ComponentContainer } from "../styles";
import { StyledInput } from "./styles";

export type NumberInputProps = {
  name: string;
  label: string;
  value?: string;
  onChange?: ChangeEventHandler;
  isRequired?: boolean;
  isValid?: boolean;
  errorText?: string;
  step?: number;
  max?: number;
  min?: number;
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ name, label, isRequired, isValid, errorText, ...props }, ref) => {
    const id = useId();

    return (
      <ComponentContainer>
        <FormComponentLabel label={label} isRequired={isRequired} id={id} />
        <StyledInput
          type="number"
          name={name}
          ref={ref}
          aria-labelledby={id}
          {...props}
        />
        {!isValid && <span>{errorText}</span>}
      </ComponentContainer>
    );
  },
);

NumberInput.displayName = "Number Input";
