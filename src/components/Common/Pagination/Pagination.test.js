import { render } from "@testing-library/react";
import React from "react";
import Pagination from "./Pagination";

describe("Pagination tests", () => {
	test("Spans should be count === 10", () => {
		// eslint-disable-next-line testing-library/render-result-naming-convention
		const component = render(<Pagination
			totalUsersCount={100}
			pageSize={10}
			currentPage={1}
			onChangePage={jest.fn()}
			portionSize={10}
		/>);
		// eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
		const spans = component.container.querySelectorAll("span")
		expect(spans.length).toBe(10)
	})
})