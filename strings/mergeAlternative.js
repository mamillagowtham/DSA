
let word1 = "abcd";
let word2 = "pqrs";

let m = word1.length;
let n = word2.length;
let ans = "";
function merge(word1, word2) {
    for (let i = 0; i <m || i<n ; i++) {

        if (i < m) {
            ans += word1[i]
        }
        if (i < n) {
            ans += word2[i]
        }
    }
    return ans;
}
console.log(merge(word1, word2))