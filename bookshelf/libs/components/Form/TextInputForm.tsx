import { useId } from "react";
import { VStack } from "../Stacks";
import { FormComponentLabel } from "./FormComponentLabel";

type TextInputProps = {
  name: string;
  label: string;
  isRequired?: boolean;
};

export const TextInputForm = ({ label, name, isRequired }: TextInputProps) => {
  const id = useId();

  return (
    <VStack spacing={4}>
      <FormComponentLabel id={id} label={label} isRequired={isRequired} />
      <input aria-labelledby={id} name={name} />
    </VStack>
  );
};
