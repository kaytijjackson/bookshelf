import { forwardRef, useId } from "react";
import { VStack } from "../Stacks";
import { FormComponentLabel } from "./FormComponentLabel";
import { SelectProps } from "./SelectForm";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, isRequired, value, errorText, isValid, options, ...props },
    ref,
  ) => {
    const id = useId();

    return (
      <VStack spacing={4}>
        <FormComponentLabel id={id} label={label} isRequired={isRequired} />
        <select value={value} ref={ref} {...props}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {!isValid && <span>{errorText}</span>}
      </VStack>
    );
  },
);

Select.displayName = "Select";
