/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (() => {

eval("\nfunction task1() {\n    class Person {\n        constructor(name, age) {\n            this.name = name;\n            this.age = age;\n        }\n        greet() {\n            console.log(\"Задание 1\", `Привет ${this.name} твой возраст ${this.age}?`);\n        }\n    }\n    const person1 = new Person(\"gazik\", 21);\n    person1.greet();\n}\ntask1();\nfunction task2() {\n    console.log(\"2 задание\");\n    class Circle {\n        constructor(radius) {\n            this.radius = radius;\n        }\n        calculateArea() {\n            //S = πr^2\n            const area = (this.radius * Math.PI) ** 2;\n            console.log(`площадь круга равна ${area}`);\n        }\n        calculatePerimeter() {\n            //P = 2πr\n            const perimeter = this.radius * Math.PI * 2;\n            console.log(`периметр круга равен ${perimeter}`);\n        }\n    }\n    class Rectangle {\n        constructor(x, y) {\n            this.x = x;\n            this.y = y;\n        }\n        calculateArea() {\n            //S = a × b\n            const area = this.x * this.y;\n            console.log(`площадь прямоугольника равна ${area}`);\n        }\n        calculatePerimeter() {\n            //P = 2(a + b)\n            const perimeter = (this.x + this.y) * 2;\n            console.log(`периметр прямоугольника равен ${perimeter}`);\n        }\n    }\n    const сircle = new Circle(25);\n    сircle.calculateArea();\n    сircle.calculatePerimeter();\n    const rectangle = new Rectangle(54, 65);\n    rectangle.calculateArea();\n    rectangle.calculatePerimeter();\n}\ntask2();\nfunction task3() {\n    console.log(\"задание 3\");\n    class Dog {\n        constructor(name, breed) {\n            this.name = name;\n            this.breed = breed;\n        }\n    }\n    class Cat {\n        constructor(name, color) {\n            this.name = name;\n            this.color = color;\n        }\n    }\n    const cat = new Cat(\"пушистик\", \"белая\");\n    const dog = new Dog(\"собакен\", \"хаски\");\n    function printPetInfo(pet) {\n        if (\"breed\" in pet) {\n            console.log(`имя: ${pet.name}, порода: ${pet.breed}`);\n        }\n        if (\"color\" in pet) {\n            console.log(`имя: ${pet.name}, цвет: ${pet.color}`);\n        }\n    }\n    printPetInfo(cat);\n    printPetInfo(dog);\n}\ntask3();\nfunction task4() {\n    console.log(\"задание 4\");\n    class TodoList {\n        constructor() {\n            this.tasks = [];\n        }\n        addTask(task) {\n            this.tasks.push(task);\n        }\n        getTasks() {\n            if (this.tasks.length) {\n                return this.tasks.map((task) => ({ id: task.id, text: task.text }));\n            }\n        }\n    }\n    const list = new TodoList();\n}\nfunction task5() {\n    console.log(\"задание 5\");\n    function filterByAge(persons, age) {\n        return persons.filter((person) => person.age > age);\n    }\n    const people = [\n        { age: 30, name: 'Alice' },\n        { age: 20, name: 'Bob' },\n    ];\n    const overTwenty = filterByAge(people, 20);\n}\ntask5();\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"]();
/******/ 	
/******/ })()
;