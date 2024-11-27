import React from "react";
import { render, screen } from "@testing-library/react";
import { InstructionsComponent } from "Components/InstructionsComponent/InstructionsComponent";
import "@testing-library/jest-dom";

describe("InstructionsComponent", () => {
  it("renders instructions correctly", () => {
    const instructions = "Shake well with ice and strain into a glass.";
    render(<InstructionsComponent instructions={instructions} />);
    expect(screen.getByText("Instructions:")).toBeInTheDocument();
    expect(screen.getByText(instructions)).toBeInTheDocument();
  });
});
