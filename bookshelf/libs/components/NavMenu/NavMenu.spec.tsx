import { render, screen } from "@testing-library/react";
import { NavMenu } from "./NavMenu";

describe("NavMenu", () => {
  it("should render", () => {
    render(<NavMenu />);

    expect(screen.getByRole("link", { name: "Dashboard" })).toBeVisible();
    expect(screen.getByRole("link", { name: "History" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Stats" })).toBeVisible();
  });
});
