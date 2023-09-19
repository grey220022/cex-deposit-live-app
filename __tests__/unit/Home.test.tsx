/**
 * @jest-environment jsdom
 */

import Home from "@/app/[locale]/page";
import { render, screen } from "@/TestTools";

jest.mock("@/i18n/client", () => ({
  I18nProvider: ({ children }: any) => <>{children}</>,
  useI18n: () => ({ t: jest.fn(), changeLocale: jest.fn(), locale: "en" }),
}));

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Docs/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
