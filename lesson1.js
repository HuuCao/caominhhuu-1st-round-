// 1. Thuật toán kiểm tra chuỗi đối xứng
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("level"));  // true
console.log(isPalindrome("hello"));  // false