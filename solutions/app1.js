'use strict';
const removeDuplicatesFromArray = (arr) => {
    newArray = [];
    arr.forEach((a) => {
        if (!newArray.includes(a)) {
            newArray.push(a);
        }
    });
    return newArray;
}

// const removeDuplicatesFromArray = arr.reduce((unique, item) =>
//     unique.includes(item) ? unique : [...unique, item], [])





export default removeDuplicatesFromArray;
