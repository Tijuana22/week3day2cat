class Cat {
    constructor(name, age, color) {
        
        this.name = name;
        this.age = age;
        this.color = color;
    }

    agePlusTwo() {
        return this.age + 2;
        // console.log(agePlusTwo());
    }

    favoriteToy() {
        return this.name + ' laser pointer'
    }

    favoriteFood() {
        return this.color + ' lasagna'
    }



}
const cat1 = new Cat('Lucky', 3, 'black');
const cat2 = new Cat('Tiger', 5, 'orange');
const cat3 = new Cat('Lily', 6, 'white');

console.log(cat1);

console.log(cat1.agePlusTwo());

console.log(cat2.favoriteToy());

console.log(cat3.favoriteFood());