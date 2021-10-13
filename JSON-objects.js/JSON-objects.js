const myArray = ['jim', 28, 'red']

console.log(myArray[2])

// all objects have key value pairs
let person = {
    name: 'jim',
    age: 28,
    hairColor: 'red',
    run: function(){console.log('running')}
}
//we access object's state value with a dot
console.log(person.age)
// object's can contain functions also know as methods
person.run()
person.age = person.age +1
person.run()

function walk (){console.log('walking slow')}

let anotherPerson = {
    name: 'Sue',
    age: 27,
    hairColor: 'brown',
    walk: function(){console.log('walking')}
}
console.log('another person hair color', anotherPerson.hairColor)
anotherPerson.walk()

//array of 2 people objects
let people = [person, anotherPerson]
console.log(people[0])
console.log(people)
console.log(people[2].name + ' has ' + person.hairColor + ' hair.')

// how can we use arrays of objects ????
people.forEach(person=> console.log(person.name + ' has ' + person.hairColor + ' hair.'))
