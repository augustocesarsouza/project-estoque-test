import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Home from "./Home";

describe("Home", () => {
  test("should render header Home", () => {
    render(<Home />);

    const header = screen.getByRole("heading", { name: /Vite React/i });
    expect(header).toBeInTheDocument();
  });

  test("should render button First Home", () => {
    render(<Home />);

    const button = screen.getByRole("button", { name: /count is 1/i });
    expect(button).toBeInTheDocument();
  });

  test("should render button Second Home", () => {
    render(<Home />);

    const button = screen.getByRole("button", { name: /Pegar user/i });
    expect(button).toBeInTheDocument();
  });

  test("should render button Third Home", () => {
    render(<Home />);

    const button = screen.getByRole("button", { name: /criar conta/i });
    expect(button).toBeInTheDocument();
  });
});
