/**
 * Created by EmmaWu on 2016/9/28.
 */

function sortNumbers(numbers) {
    // if (numbers.length <= 1) return numbers;
    // for (var i = 0; i < numbers.length - 1; i++) {
    //     for (var j = i+1; j < numbers.length; j++) {
    //
    //     }
    // }
    return numbers.sort(compare);
    function compare(num1, num2) {
        // if (num1 > num2) {
        //     return 1;
        // } else if (num1 < num2) {
        //     return -1;
        // } else {
        //     return 0;
        // }
        return num1 - num2;
    }
}

var nums = [1, 3, 6, 22, 34, 567, 334, 0.2];
sortNumbers(nums);
console.log(nums);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'dot' },
    { name: 'Zeros', value: 37 }
];

function sortValue(items) {
    return items.sort(compare);

    function compare(item1, item2) {
        if (item1.value > item2.value) {
            return 1;
        } else if (item1.value < item2.value) {
            return -1;
        } else if (item1.value === item2.value) {
            return 0;
        } else {
            return 1;
        }
    }
}

sortValue(items);
console.log(items);