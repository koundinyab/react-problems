import { renderHook, act } from "@testing-library/react";
import useUserNavigation from "./useUserNavigation";

describe("Test user navigation hook", () => {
    test("should decrement the index if the index is in range", () => {
        const { result } = renderHook(() => useUserNavigation());
        act(() => {
            result.current[2]();
            result.current[2]();
            result.current[1]();
        });
        expect(result.current[3]).toBe(1);
    });
    test("should increment the index if index is in range", () => {
        const { result } = renderHook(() => useUserNavigation());
        act(() => {
            result.current[2]();
        });
        expect(result.current[3]).toBe(1);
    });
    test("should fetch user when current index is greater than the userlist length", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        results: [
                            {
                                name: {
                                    first: "Koundinya",
                                    last: "Bhogaraju",
                                },
                            },
                        ],
                    }),
            })
        );
        const { result } = renderHook(() => useUserNavigation());
        await act(async () => {
            // Wait for the state update to complete
            await new Promise((resolve) => setTimeout(resolve, 0));
        });
        expect(global.fetch).toHaveBeenCalledWith("https://randomuser.me/api/");
        expect(result.current[0]).toEqual({
            name: {
                first: "Koundinya",
                last: "Bhogaraju",
            },
        });
    });
});
