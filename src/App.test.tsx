import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
	it("renders", () => {
		const { baseElement } = render(<App />);
		expect(baseElement).toHaveTextContent("Hello world");
	});
});
