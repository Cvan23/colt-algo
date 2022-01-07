class Cat {
  constructor(name, breed, mood, age) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.age = age;
    console.log(this);
  }

  greeting() {
    return `Hello ${this.name}! You are feeling ${this.mood} today!`
  }
}

const koa = new Cat('Koa Bear', 'Tabby', 'Stabby', 2);
const maple = new Cat('Maple', 'Tortie', 'GROMPY AF', 200);
const cooper = new Cat('Cooper', 'Ginger', 'Curious', 5);
const binx = new Cat('Binx', 'Void', 'Zoomie', 1000);

// Sub class of CAT
class Buddy extends Cat {
  constructor(name, breed, mood, age, relationship) {
    super(name, breed, mood, age);
    this.relationship = relationship;
  }
}

const rocket = new Buddy('Rocket', 'Tabby', 'Playful', 1, 'neighboor');
console.log(rocket);

const output = rocket.greeting();
const output2 = maple.greeting();

console.log(output, output2);