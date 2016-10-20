// 1. Write a program that takes a set of names and phoneNumbers from a text file and stores them in a Dictionary object.
// Include in your program the ability to display one phone number, display all phone numbers, add new phone numbers
// , remove phone numbers, and clear out the list of numbers.


// 2. Using the Dictionary class,write a program that stores the number of occurrences of words in a text. Your program
// should display each word in a text just once as well as the number of times the word occurs in the text.
// For example, given the text “the brown fox jumped over the blue fox,” the output will be:
// the: 2
// brown: 1
// fox: 2
// jumped: 1
// over: 1
// blue: 1

var Dictionary = require('./dictionary');
var dictionary = new Dictionary();
var sentence = 'the brown fox jumped over the blue fox';
countWords(sentence);
countWordsInOrder(sentence);

function countWords(sentence) {
    sentence = sentence.split(' ');
    var filteredSentence = new Dictionary();
    sentence.forEach(item => {
        var count;
        if (filteredSentence.find(item)) {
            count = filteredSentence.find(item);
            count ++;
            filteredSentence.setValue(item, count);
        } else {
            filteredSentence.add(item, 1);
        }
    });
    filteredSentence.showAll();
}

// 3. Rewrite exercise 2 so that it displays the words in sorted order.

function countWordsInOrder(sentence) {
    sentence = sentence.split(' ');
    var filteredSentence = new Dictionary();
    sentence.forEach(item => {
        var count;
        if (filteredSentence.find(item)) {
            count = filteredSentence.find(item);
            count ++;
            filteredSentence.setValue(item, count);
        } else {
            filteredSentence.add(item, 1);
        }
    });
    filteredSentence.sort();
}
