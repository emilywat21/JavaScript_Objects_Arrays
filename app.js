console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr){
    var sum = 0;

    arr.forEach((number) => {
        sum += number;
    });
    return sum;
}
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book = {};
book.title = "JS for Dummies";
book.author = "Emily Watson";
book.pages = 300;
book.readCount = 1;

book.info = function(){
    return `${this.title} by ${this.author} is ${this.pages} pages long and has been read ${this.readCount} time(s).`;
}
console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence){

let words = sentence.split(" ");

let result = words.map((word) => {
    let letters = word.split(""); 
    letters.reverse();
    return letters.join("");
})
return result.join(" ");
}
console.log(reverseWords(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function converter(fileData){
    let rows = fileData.split("/n");
    let headers = rows[0].split(",");

let result = [];
for (let i = 1; i < rows.length; i++){
    let obj = {};
    let data = rows[i].split(",");
    data.forEach((val,idx) => {
        obj[headers[idx]] = val;
    });
    result.push(obj);
}
return result;
}
console.log(converter(csvData));
