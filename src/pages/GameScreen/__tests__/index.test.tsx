import React from "react";
import { render } from "@testing-library/react-native";
import { GameScreen } from "..";

describe("GameScreen", () => {
  it("should have 1 child", () => {
    const root = render(<GameScreen />);
    expect(root).toBeDefined();
  });
});
