function createPerson(name) {
    return {
        talk() { return `hello I am ${name}` }
    }
}

let me = createPerson('shu')
me.name = "sam"
console.log(me.name)
console.log(me.talk())