import { render, screen } from "@testing-library/react";
import { Page } from "./Page";

describe("Page", () => {
  it("should render", () => {
    render(
      <Page title="test title">
        <span>content</span>
      </Page>,
    );

    expect(screen.getByRole("heading", { name: "test title" })).toBeDefined();
    expect(screen.getByText("content")).toBeDefined();
  });

  it("should render without title", () => {
    render(
      <Page>
        <span>content</span>
      </Page>,
    );

    expect(screen.queryByRole("heading")).toBeNull();
  });
});
