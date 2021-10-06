export const getRandomNumber = (minValue, maxValue) => {
    const min = Math.ceil(minValue);
    const max = Math.floor(maxValue);
    return  Math.floor(Math.random() * (max - min) + min );
}