"use client";

import { Page, TextInputForm } from "@/libs/components";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type AddBookInputs = {
  name: string;
};

export const AddBook = () => {
  const form = useForm<AddBookInputs>({
    defaultValues: {
      name: "",
    },
    mode: 'onTouched',
  });
  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<AddBookInputs> = (data) => {
    console.log("data", data);
    return data;
  };

  return (
    <Page title="Add New Book">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInputForm label="Book name" name="name" />
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </form>
      </FormProvider>
    </Page>
  );
};

export default AddBook;
