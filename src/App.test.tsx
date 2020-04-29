import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
	it("renders", () => {
		const { getByTestId } = render(<App />);
		expect(getByTestId("welcome-message")).toHaveTextContent("Hello world");
	});
});
