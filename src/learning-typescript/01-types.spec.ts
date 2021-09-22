
describe('Data Types and Variables and Constants in TypeScript', () => {

  describe('Declaring variables', () => {
    it('implicitly typed variables', () => {
      let x;

      x = 32;
      expect(typeof (x)).toBe('number');

      x = 'Tacos';
      expect(typeof (x)).toBe('string');

      let y = 'George';

      // y = 1138;

      y = 'Paul';

      let z = 'Ringo'; // initializing with an implicit type.

      // z = 1138;

    });
    it('explicitly typed variables', () => {
      let x: string | number; // Union Type - we do this A LOT in Angular.


      x = 12;


      x = 'Cat';

      // let y: any;

      // y.barkLikeADog();


    });

    it('constants', () => {
      const PI = 3.1415;

      // PI = 3;

      const friends = ['Sean', 'Billy', 'Ed', 'Mo'];

      // friends = [];
      friends[0] = 'Amy';

      expect(friends).toEqual(['Amy', 'Billy', 'Ed', 'Mo']);

      expect(PI).not.toBe(3.145);

      const dune = {
        title: 'Dune',
        actors: ['Zendaya', 'Timothy Csomething']
      };

      expect(dune.title).toBe('Dune');
      expect(dune.actors[0]).toBe('Zendaya');

      dune.actors[1] = 'Timothy Chalamet';

      expect(dune).toEqual({
        title: 'Dune',
        actors: ['Zendaya', 'Timothy Chalamet']
      });
    });

  });


  describe('TypeScript literals', () => {

    it('string literals', () => {

      let name = 'Jeff';
      let name2 = "Jeff";
      let name3 = `Jeff`;

      expect(name).toBe(name2);
      expect(name2).toBe(name3);

      let story = `Chapter 1


      It was a Dark and Story Night!`;

      let htmlBlock = `<div>
      <h1>Tacos</h1>
      </div>`;

      const user = 'Bob';
      const job = 'Developer';
      const pay = 120000;

      //const message = 'The user name is ' + user + ' and they are a ' + job + ' And get paid ' + pay + ' A year';
      const message = `The user name is ${user} and they are a ${job} And get paid ${pay} A year`;


      expect(message).toBe('The user name is Bob and they are a Developer And get paid 120000 A year');


      const author = "Flannery O'Conner";
      const quote = 'She said "Holy Cow!"';




    });

    it('number literals', () => {
      let n1: number = 10;
      let n2: number = 10.5;
      let n3: number = 0xff; // Base 16 Hex numbers
      let n4: number = 0b101010;
      let n5: number = 0o644; // Base 8 - Octal

      let n6: number = 180_000;

      expect(n6).toBe(180000);


    });
    it('has array literals', () => {
      // let favoriteNumbers: (string | number)[];
      let favoriteNumbers: Array<string | number>;

      favoriteNumbers = [1, 8, 9, 108, 'Dog'];

      favoriteNumbers[0] = 'Three';

      let bools: boolean[];

      // let fn: (string | number)[];

    });

    it('object literals', () => {

      interface Book {
        title: string;
        author: string;
        yearReleased: number;
        publisher?: string;
      }

      const book: Book = {
        title: 'Dune',
        author: 'Frank Herbert',
        yearReleased: 1963
      };

      interface Actor {
        firstName: string;
        lastName: string;
        roles: {
          part: string;
          films: string[];
        }[];
      }
      const actor: Actor = {
        firstName: 'Mark',
        lastName: 'Hammil',
        roles: [
          { part: 'Luke Skywalker', films: ['Star Wars', 'The Empire Strikes Back'] }
        ]
      }

      const actor2: Actor = {
        firstName: 'Kyle',
        lastName: 'McCloughlin',
        roles: [
          { part: 'Special Agent Dale Cooper', films: ['Twin Peaks', 'Twin Peaks Firewalk With Me', 'Twin Peaks The Return'] }
        ]
      };





      expect(book.title).toBe('Dune');



    });
    it('duck typing', () => {

      interface Loggable { message: string, for: string }

      // "If it walks like a duck and talks like a duck it's probably a duck" "Structural Typing"
      function log(loggable: Loggable) {
        const now = new Date().toISOString();
        console.log(`Logging ${loggable.message} for ${loggable.for} at ${now}`);
      }

      const phoneCall = {
        for: 'Bob',
        message: 'Your laundry is ready',
        from: 'Joe\'s laundry',
        number: '555-1212'
      }

      log(phoneCall);


      class Menu {
        mainCourse!: string;
        desert!: string;
      }

      const dinner: Menu = {
        mainCourse: 'Tacos',
        desert: 'Beer'
      }
    });
    it('function literals', () => {

      expect(add(2, 2)).toBe(4);

      type MathOp = (a: number, b: number) => number;


      // Named Function
      function add(a: number, b: number): number {
        return a + b;
      }

      // Anonymous function
      // probably don't do this. Old Skool, you look like a n00b
      const subtract = function (a: number, b: number): number {
        return a - b;
      }

      // Anonymous function with an arrow function

      // int SomeMathOp(int a, int b) { ... }
      const someMathOp: MathOp = (a, b) => a + b;

      const multiply: MathOp = (n1, n2) => n1 * n2;

      expect(multiply(3, 3)).toBe(9);

      const divide = (a: number, b: number): number => {
        if (b === 0) { throw new Error("Are you trying to open a black hole!") };
        return a / b;
      }


      function doubleThemAndDoMath(x: number, y: number, f: MathOp) {
        return f(x + x, y + y);
      }

      expect(doubleThemAndDoMath(2, 2, add)).toBe(8);
      expect(doubleThemAndDoMath(3, 3, multiply)).toBe(36);

      expect(doubleThemAndDoMath(2, 2, (x, y) => x / y)).toBe(1);

    });
  });
});





