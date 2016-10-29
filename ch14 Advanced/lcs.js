/**
 * Created by EmmaWu on 2016/10/29.
 */
function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsArr = new Array(word1.length + 1);

    for (var i = 0; i < word1.length + 1; ++i) {
        lcsArr[i] = new Array(word2.length + 1);
        for (var j = 0; j < word2.length + 1; ++j) {
            lcsArr[i][j] = 0;
        }
    }

    for (var i = 0; i <= word1.length; ++i) {
        for (var j = 0; j <= word2.length; ++j) {
            if (i == 0 || j == 0) {
                lcsArr[i][j] = 0;
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1;
                } else {
                    lcsArr[i][j] = 0;
                }
            }

            if (max < lcsArr[i][j]) {
                max = lcsArr[i][j];
                index = i;
            }
        }
    }
    var str = "";
    if (max == 0) {
        return "";
    }
    else {
        for (var i = index - max; i <= max; ++i) {
            str += word2[i];
        }
        return str;
    }

}

console.log(lcs('azbb', 'dbbbncc')); //书里面的算法有问题 。。。
console.log(longestCommonSubstring('azbb', 'dbbbncc'));

function longestCommonSubstring(string1, string2){
    // init max value
    var max = 0;
    var index = 0;
    // init 2D array with 0
    var table = [],
        len1 = string1.length,
        len2 = string2.length,
        row, col;
    for(row = 0; row <= len1; row++){
        table[row] = [];
        for(col = 0; col <= len2; col++){
            table[row][col] = 0;
        }
    }
    // fill table
    var i, j;
    for(i = 0; i < len1; i++){
        for(j = 0; j < len2; j++){
            if(string1[i] === string2[j]){
                if(table[i][j] === 0){
                    table[i+1][j+1] = 1;
                } else {
                    table[i+1][j+1] = table[i][j] + 1;
                }
                if(table[i+1][j+1] > max){
                    max = table[i+1][j+1];
                    index = i;
                }
            } else {
                table[i+1][j+1] = 0;
            }
        }
    }

    var str = "";
    if (max == 0) {
        return "";
    }
    else {
        for (var i = index - max; i <= max; ++i) {
            str += string2[i];
        }
        return str;
    }

}