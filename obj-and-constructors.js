// Objects and object constructors lesson

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function () {
        console.log(name)
    }
}

const player1 = new Player("Steve", "X")
const player2 = new Player('also Steve', 'O')

player1.sayName()
player2.sayName()


// student function
function Student() {
}

Student.prototype.sayName = function () {
    console.log(this.name)
}

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName()

console.log(carl)

const pedro = new EighthGrader('pedro')
pedro.sayName()
console.log(pedro)


// make a new object
const book = {
    title: 'title',
    author: 'author',
    pages: 'pages',
    read: 'read'
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.getTitle = function () {
    console.log(this.title)
}

Book.prototype.getAuthor = function () {
    console.log(this.author)
}

Book.prototype.getPages = function () {
    console.log(this.pages)
}

Book.prototype.getRead = function () {
    console.log(this.read)
}


function PrintStuff(myDocuments) {
    this.documents = myDocuments;
}

// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
PrintStuff.prototype.print = function () {
    console.log(this.documents);
}

// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
var newObj = new PrintStuff("I am a new Object and I can print.");

// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
newObj.print(); //I am a new Object and I can print.

var anotherObj = new PrintStuff("Now I'm printing this!")
anotherObj.print();

function Account() {
}
// This is the use of the Account constructor to create the userAccount object.
var userAccount = new Account();
//The constructor in this example is Object () 
var myObj = new Object();
// And if you later want to find the myObj constructor:
console.log(myObj.constructor); // Object()

// Another example: Account () is the constructor
var userAccount = new Account();
// Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()