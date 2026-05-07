export const FormComponentLabel = ({
  id,
  isRequired,
  label,
}: {
  id: string;
  isRequired?: boolean;
  label: string;
}) => {
  return (
    <label id={id}>
      {label}
      {isRequired ? "*" : ""}
    </label>
  );
};
