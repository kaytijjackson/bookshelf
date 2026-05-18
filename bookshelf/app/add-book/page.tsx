"use client";

import { NumberInputForm, Page, TextInputForm } from "@components";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StyledForm, SubmitButton } from "./styles";

type AddBookInputs = {
  name: string;
  author: string;
  id: string;
  rating: number;
};

export const AddBook = () => {
  const form = useForm<AddBookInputs>({
    defaultValues: {
      name: "",
      author: "",
      id: "",
      rating: 1,
    },
    mode: "onTouched",
  });
  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<AddBookInputs> = (data) => {
    console.log("data", data);
    return data;
  };

  return (
    <Page title="Add New Book">
      <FormProvider {...form}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <TextInputForm label="Book name" name="name" />
          <TextInputForm label="Author" name="author" />
          <TextInputForm label="Barcode" name="id" />
          <NumberInputForm
            label="Rating"
            name="rating"
            min={1}
            max={5}
            step={0.25}
          />
          <SubmitButton type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </SubmitButton>
        </StyledForm>
      </FormProvider>
    </Page>
  );
};

export default AddBook;
