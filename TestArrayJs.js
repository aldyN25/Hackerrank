// Expected Result = true
// Direction : need to check if each of array value has value less than 91
const array = [1, 29, 88, 37, 22, '90'];

function result(array) {
return array.every(el => el < 91);  // true, selama tidak ada element lebih besar dari 91
}

console.log(result(array));