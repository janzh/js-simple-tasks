export const indexOfWithBinarySearch = (sortedArray: number[] | string[], element: number | string) => {
    const array = [...sortedArray];

    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        const midIndex = Math.ceil((endIndex + startIndex) / 2);

        const midElement = array[midIndex];
        if (array[midIndex] === element) {
            return midIndex;
        }

        if (element < midElement) {
            endIndex = midIndex - 1;
        } else {
            startIndex = midIndex + 1;
        }
    }
    return -1;
};
