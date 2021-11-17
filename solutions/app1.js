'use strict';
const removeDuplicatesFromArray = (arr) => {
    const newArray = [];
    arr.forEach((a) => {
        if (!newArray.includes(a)) {
            newArray.push(a);
        }
    });
    return newArray;
}







export default removeDuplicatesFromArray;
