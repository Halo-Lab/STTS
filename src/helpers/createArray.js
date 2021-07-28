const twoDimensionalArray = (array, innerLengthArray) => {
    const newArray = [];
    for (let i = 0; i < innerLengthArray; i++) {
        newArray.push([])
    }

    let i = 0;
    array.forEach(el => {
        newArray[i].push(el);
        i++;
        if (i === innerLengthArray) i = 0;

    })
    return newArray;
};


export default twoDimensionalArray;