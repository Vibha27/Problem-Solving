function convertSnakeCase(str='') {
    let snake_case = '';
    for (let char of str) {
        if (char.charCodeAt(0) <= 90) {
            snake_case += `_${char.toLowerCase()}`
        } else {
            snake_case += char
        }
    }
    return snake_case;
}

const str = `thisIsTestByVibha`;
console.log(convertSnakeCase(str))