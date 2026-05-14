import { ChangeEventHandler, forwardRef, useId } from "react";
import { VStack } from "../Stacks";
import { FormComponentLabel } from "./FormComponentLabel";

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
      <VStack spacing={4}>
        <FormComponentLabel label={label} isRequired={isRequired} id={id} />
        <input
          type="number"
          name={name}
          ref={ref}
          aria-labelledby={id}
          {...props}
        />
        {!isValid && <span>{errorText}</span>}
      </VStack>
    );
  },
);

NumberInput.displayName = "Number Input";
