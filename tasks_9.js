function find_average(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
let k = [1, 2, 3, 4, 5, 6, 7];
console.log(find_average(k));