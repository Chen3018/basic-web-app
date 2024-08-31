import CalculatePrice from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("CalculatePrice", () => {
    test("should return a number", () => {
        const response: number = CalculatePrice([], 0, 0);
        expect(typeof response).toBe("number");
    });
});