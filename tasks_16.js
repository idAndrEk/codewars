function basicOp(operation, value1, value2) {
    let result = 0;
    if (operation == '-') {
        return result = value1 - value2;
    } if (operation == '+') {
        return result = value1 + value2;
    } if (operation == '/') {
        return result = value1 / value2;
    } if (operation == '*') {
        return result = value1 * value2;
    }
}

console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));