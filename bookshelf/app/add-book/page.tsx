import { Page, TextInputForm } from "@/libs/components";

export const AddBook = () => {
  const handleSubmit = () => {};

  return (
    <Page title="Add New Book">
      <form onSubmit={handleSubmit}>
        <TextInputForm label="Book name" name="name" />
      </form>
    </Page>
  );
};

export default AddBook;
