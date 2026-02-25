import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";

describe("navigation", () => {
  it("renders privacy policy link in footer", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /privacy policy/i });
    expect(link).toHaveAttribute("href", "/privacy-policy");
  });

  it("renders return to home link on 404 page", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /return to home/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
