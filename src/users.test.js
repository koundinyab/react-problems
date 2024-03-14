import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Users from "./Users";

jest.mock("./custom-hooks/useUserNavigation", () => ({
    __esModule: true,
    default: () => {
        const userList = [
            {
                name: { title: "Ms", first: "Alice", last: "Smith" },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/1.jpg",
                },
            },
            {
                name: { title: "Mr", first: "Bob", last: "Jones" },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/1.jpg",
                },
            },
        ];
        const [user, previousUser, nextUser, currentuserPointer] = [
            userList[0],
            jest.fn(),
            jest.fn(),
            0,
        ];
        return [user, previousUser, nextUser, currentuserPointer];
    },
}));
describe("users component", () => {
    test("renders user information", () => {
        render(<Users />);
        const userTile = screen.getByTestId("user-tile");
        expect(userTile).toBeInTheDocument();
    });
    // test("clicking next user increments user", () => {
    //     render(<Users />);
    //     const nextButton = screen.getByText(/next user/i);
    //     fireEvent.click(nextButton);
    //     expect(screen.getByText("Bob Jones")).toBeInTheDocument();
    // });
});
