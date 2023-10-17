function task1() {
  interface IPerson {
    name: string;
    age: number;
    greet(): void;
  }
  class Person implements IPerson {
    name;
    age;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet(): void {
      console.log("Задание 1", `Привет ${this.name} твой возраст ${this.age}?`);
    }
  }

  const person1 = new Person("gazik", 21);
  person1.greet();
}
task1();

function task2() {
  console.log("2 задание");

  interface IShape {
    y?: number;
    x?: number;
    radius?: number;
    calculateArea(): void;
    calculatePerimeter(): void;
  }
  class Circle implements IShape {
    radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    calculateArea() {
      //S = πr^2
      const area = (this.radius * Math.PI) ** 2;
      console.log(`площадь круга равна ${area}`);
    }
    calculatePerimeter() {
      //P = 2πr
      const perimeter = this.radius * Math.PI * 2;
      console.log(`периметр круга равен ${perimeter}`);
    }
  }

  class Rectangle implements IShape {
    y: number;
    x: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    calculateArea() {
      //S = a × b
      const area = this.x * this.y;
      console.log(`площадь прямоугольника равна ${area}`);
    }
    calculatePerimeter() {
      //P = 2(a + b)
      const perimeter = (this.x + this.y) * 2;
      console.log(`периметр прямоугольника равен ${perimeter}`);
    }
  }
  const сircle = new Circle(25);
  сircle.calculateArea();
  сircle.calculatePerimeter();
  const rectangle = new Rectangle(54, 65);
  rectangle.calculateArea();
  rectangle.calculatePerimeter();
}
task2();

function task3() {
  console.log("задание 3");

  interface IDog {
    name: string;
    breed: string;
  }
  class Dog implements IDog {
    name: string;
    breed: string;
    constructor(name: string, breed: string) {
      this.name = name;
      this.breed = breed;
    }
  }

  interface ICat {
    name: string;
    color: string;
  }
  class Cat implements ICat {
    name: string;
    color: string;
    constructor(name: string, color: string) {
      this.name = name;
      this.color = color;
    }
  }

  type Pet = IDog | ICat;
  const cat: Pet = new Cat("пушистик", "белая");
  const dog: Pet = new Dog("собакен", "хаски");
  function printPetInfo(pet: Pet): void {
    if ("breed" in pet) {
      console.log(`имя: ${pet.name}, порода: ${pet.breed}`);
    }
    if ("color" in pet) {
      console.log(`имя: ${pet.name}, цвет: ${pet.color}`);
    }
  }
  printPetInfo(cat);
  printPetInfo(dog);
}
task3();

function task4() {
  console.log("задание 4");

  type ITask = {
    id: number;
    text: string;
  };
  class TodoList {
    tasks: ITask[];
    constructor() {
      this.tasks = [];
    }
    addTask(task: ITask) {
      this.tasks.push(task);
    }

    getTasks() {
      if (this.tasks.length) {
        return this.tasks.map((task) => ({ id: task.id, text: task.text }));
      }
    }
  }

  const list = new TodoList();
}

function task5() {
    console.log("задание 5");
    
    interface Person {
        age: number;
        name: string;
      }
      
      function filterByAge<T extends Person>(persons: T[], age: number): T[] {
        return persons.filter((person) => person.age > age);
      }
      
      const people: Person[] = [
        { age: 30, name: 'Alice' },
        { age: 20, name: 'Bob' },
      ];
      
      const overTwenty = filterByAge(people, 20);
      
}
task5();
