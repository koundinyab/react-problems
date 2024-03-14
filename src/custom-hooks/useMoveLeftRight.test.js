import { renderHook, act } from "@testing-library/react";
import useMoveLeftRight from "./useMoveLeftRight";

describe("useMoveLeftRight hook", () => {
    test("filter selected and non selected data from checkedItems", () => {
        const { result } = renderHook(() => useMoveLeftRight());
        act(() => {
            result.current.setFromCheckedItems(new Set().add(1));
        });
        expect(result.current.handleFromTo([1, 2], "from")).toBe({});
    });
});
