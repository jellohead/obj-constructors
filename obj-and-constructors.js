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



const book = {
    title: 'title',
    author: 'author',
    pages: 'pages',
    read: Boolean
}

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
