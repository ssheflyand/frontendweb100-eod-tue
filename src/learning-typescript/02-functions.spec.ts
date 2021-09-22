// import { tagMaker } from "src/app/utils/tags";
// import { isEven } from 'src/app/utils/math';
import { isEven, tagMaker } from "src/app/utils";
// import * as utils from "src/app/utils";


interface Pizza {
  quality: number;
}


describe('some function stuff', () => {

  describe('higher order functions', () => {

    it('procedural', () => {
      // <tag>content</tag>

      function tagMaker(tag: string, content: string): string {
        return `<${tag}>${content}</${tag}>`;
      }

      expect(tagMaker('h1', 'Hello')).toBe('<h1>Hello</h1>');
      expect(tagMaker('h1', 'Goodbye')).toBe('<h1>Goodbye</h1>');
      expect(tagMaker('p', 'message')).toBe('<p>message</p>');
    });
    it('object-oriented way', () => {

      class TagMaker {


        constructor(private tag: string) { }

        make(content: string): string {
          return `<${this.tag}>${content}</${this.tag}>`;
        }
      }

      const h1Maker = new TagMaker('h1');
      const pMaker = new TagMaker('p');

      expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
      expect(h1Maker.make('Goodbye')).toBe('<h1>Goodbye</h1>');
      expect(h1Maker.make('Tacos!')).toBe('<h1>Tacos!</h1>');
      expect(pMaker.make('Message')).toBe('<p>Message</p>');
    });

    it('higher order function', () => {


      const spanMaker = tagMaker('span');
      const h1Maker = tagMaker('h1'); // "closures"
      const pMaker = tagMaker('p');


      expect(h1Maker('Hello')).toBe('<h1>Hello</h1>');
      expect(h1Maker('Goodbye')).toBe('<h1>Goodbye</h1>');
      expect(h1Maker('Tacos!')).toBe('<h1>Tacos!</h1>');
      expect(pMaker('Message')).toBe('<p>Message</p>');
    });
  });

  it('some details on parameters to functions', () => {

    function formatName(first: string, last: string, mi?: string): string {
      if (mi) {
        return `${last}, ${first} ${mi}.`;
      } else {
        return `${last}, ${first}`;
      }
    }

    expect(formatName('Han', 'Solo')).toBe('Solo, Han');
    expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
  });

  it('super minor details on function arguments', () => {

    function add(a: number = 2, b: number = 3, ...rest: number[]): number {
      return rest.reduce((s, n) => s + n, a + b);
    }

    expect(add(2, 2)).toBe(4);
    expect(add(2)).toBe(5);
    expect(add()).toBe(5);
    expect(add(undefined, 5)).toBe(7);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);



  });
  it('truth table', () => {
    expect(!!"tacos").toBe(true);
    expect("tacos").toBeTruthy();
    expect("").toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(0).toBeFalsy();
    expect(1).toBeTruthy();
    expect(-1).toBeTruthy();

  });

});

describe('array methods', () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('allows you to "visit" each member of that array', () => {

    let total = 0;
    numbers.forEach(n => total += n);
    expect(total).toBe(45);
  });

  describe('methods that create new arrays from the source array', () => {

    it('map', () => {
      // C# LINQ - "Select"

      const doubled = numbers.map(n => n + n);

      expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
      expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

      const someStrings = ['1', '2', '3'];

      const asNumbers = someStrings.map(n => parseInt(n)); // slightly dorky.
      //const asNumbers = someStrings.map(parseInt);
      expect(asNumbers).toEqual([1, 2, 3]);
    });

    it('filter', () => {
      // C# LINQ - "Where"

      // const evens = numbers.filter(n => n % 2 === 0);
      // const evens = numbers.filter(n => isEven(n));
      const evens = numbers.filter(isEven);
      expect(evens).toEqual([2, 4, 6, 8]);
    });

  });

  describe('check the membership of an array', () => {

    it('do all of the members pass this predicate?', () => {
      // C# LINQ All
      const allEven = numbers.every(isEven);
      expect(allEven).toBeFalse();
    });

    it('do any of the members of this array pass this predicate?', () => {
      // C# LINQ Any
      const someEven = numbers.some(isEven);
      expect(someEven).toBeTrue();

    });



  });
  describe('reducing', () => {

    it('has a reduce method for "boiling down" an array to a single value', () => {
      const total = numbers.reduce((p, c) => p + c);
      expect(total).toBe(45);
      expect(numbers.reduce((s, n) => s + n, 100)).toBe(145);
    });
  });
  describe('first practice', () => {


    interface Vehicle {
      vin: string;
      make: string;
      model: string;
      year: number;
      mileage: number;
    }
    const vehicles: Vehicle[] = [
      { vin: '389389839', make: 'Ford', model: 'Bronco', year: 1987, mileage: 220_000 },
      { vin: '383989837', make: 'Chevy', model: 'Camaro', year: 2001, mileage: 130_000 },
      { vin: '009083793', make: 'Ford', model: 'Escort', year: 2018, mileage: 110_000 }
    ];
    it('practice', () => {
      const results = vehicles // [{}, {}, {}]
        .filter(v => v.mileage < 200_000) // [ {}, {}]
        .map(v => `${v.make} ${v.model}`); // ["ddd", "xxx"]


      expect(results).toEqual(['Chevy Camaro', 'Ford Escort']);
    });

    it('practice two', () => {


      interface BowlingGame {
        player: string;
        score: number;
      }
      interface Summary {
        highScore: number;
        highScorer: string;
        lowScore: number;
        lowScorer: string;
      }
      const games: BowlingGame[] = [
        { player: 'Bob', score: 127 },
        { player: 'Earl', score: 221 },
        { player: 'Jean', score: 280 },
        { player: 'Jeff', score: 32 }
      ];



      const results: Summary = games
        .reduce((summary, game) => ({
          highScore: game.score > summary.highScore ? game.score : summary.highScore,
          highScorer: game.score > summary.highScore ? game.player : summary.highScorer,
          lowScore: game.score < summary.lowScore ? game.score : summary.lowScore,
          lowScorer: game.score < summary.lowScore ? game.player : summary.lowScorer
        })
          , {
            highScore: -1,
            highScorer: '',
            lowScore: 301,
            lowScorer: ''
          })

      expect(results).toEqual({
        highScore: 280,
        highScorer: 'Jean',
        lowScore: 32,
        lowScorer: 'Jeff'
      });


    });



  });

});
