

//images:  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];  length = 17
// innerLengthArray: 4;
//Output: [ [1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1], [1] ]


//images:  [1,1,1,1,1,1,1,1];  length = 8
// innerLengthArray: 2;
//Output: [ [1,1], [1,1], [1,1], [1,1] ]

const twoDimensionalArray = (images, innerLengthArray) => {
    let temporaryArray = [];
    const array = images.map((el, idx) => {
        if (temporaryArray.length === innerLengthArray) temporaryArray = [];
        temporaryArray.push(el);
        if (!((idx + 1) % innerLengthArray) || images.length - 1 === idx)
            return temporaryArray;
    });
    //array before filter [undefined,undefined,undefined,undefined,undefined,undefined,[{...},{...},{...}],undefined,undefined....]
    return array.filter((el) => el);
};


export default twoDimensionalArray;