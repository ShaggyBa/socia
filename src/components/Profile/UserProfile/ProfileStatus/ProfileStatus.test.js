import ProfileStatus from "./ProfileStatus";
import {render} from "@testing-library/react";

describe("ProfileStatus", () => {
    test("renders correctly", () => {
        // const { getByText } = render(<ProfileStatus status="Hello, World!" />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        // const messageElement = getByText(/Hello, World!/i);
        // expect(messageElement).toHaveTextContent("Hello, World!");

        const { container } = render(<ProfileStatus status="Hello, World!" />);
        // eslint-disable-next-line testing-library/no-node-access
        const componentInstance = container.firstChild; // Get the rendered component instance
        expect(componentInstance.props.status).toBe("Hello, World!");
    })
})