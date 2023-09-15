/**
 * @jest-environment jsdom
 */

import Home from "@/app/[locale]/page";
import { render, screen } from "@/TestTools";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Docs/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
