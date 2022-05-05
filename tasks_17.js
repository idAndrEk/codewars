function solution(str) {
    let result = '';
    for (i = 0; i <= str.length; i--) {
        return str += i;
    }
}
console.log(solution('fghkjllkjhgfhjkl'));

function solution(str){
    let result = '';
    for (i = str.length - 1; i >= 0; i--)
      result += str[i];
    return result;
  }

console.log(solution('fghkjllkjhgfhjkl'));
