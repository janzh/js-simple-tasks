import { indexOfWithBinarySearch } from "../indexof-binary";

describe("Binary search", () => {
    describe("number", () => {
        const sortedArray = [0, 4, 9, 17, 34, 47, 49, 50, 51, 52, 67, 78, 92, 98];

        it("should return index of existing element", () => {
            const result1 = indexOfWithBinarySearch(sortedArray, 9);
            expect(result1).toBe(2);

            const result2 = indexOfWithBinarySearch(sortedArray, 98);
            expect(result2).toBe(13);
        });

        describe("Non-existing elements", () => {
            it("should return -1 if element is not in list", () => {
                const resultAboveEnd = indexOfWithBinarySearch(sortedArray, 56);
                expect(resultAboveEnd).toBe(-1);
            });

            it("should return -1 if element is greater than all elements in list", () => {
                const resultAboveEnd = indexOfWithBinarySearch(sortedArray, sortedArray[sortedArray.length] + 1);
                expect(resultAboveEnd).toBe(-1);
            });

            it("should return -1 if element is less than all elements in list", () => {
                const resultBeforeStart = indexOfWithBinarySearch(sortedArray, sortedArray[0] + 1);
                expect(resultBeforeStart).toBe(-1);
            });
        });
    });

    describe("string", () => {
        const sortedArray = ["a", "c", "e", "g", "h", "j", "l", "n", "p", "r", "t", "v", "w", "y"];

        it("should return index of existing element", () => {
            const result1 = indexOfWithBinarySearch(sortedArray, "c");
            expect(result1).toBe(1);

            const result2 = indexOfWithBinarySearch(sortedArray, "v");
            expect(result2).toBe(11);
        });

        describe("Non-exisiting elements", () => {
            it("should return -1 if element is not in list", () => {
                const resultEmpty = indexOfWithBinarySearch(sortedArray, "");
                expect(resultEmpty).toBe(-1);

                const resultNotInList = indexOfWithBinarySearch(sortedArray, "b");
                expect(resultNotInList).toBe(-1);
            });
        });
    });
});
