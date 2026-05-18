import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SubmitButton = styled.button`
  color: ${(props) => (props.disabled ? "grey" : "black")};
  outline: 1px solid ${(props) => (props.disabled ? "grey" : "black")};
  border-radius: 2px;
  padding: 4px;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${(props) =>
      props.disabled ? "transparent" : "Gainsboro"};
  }
`;
