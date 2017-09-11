//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (color, owner, status, hungry ) {
    this.color = color,
    this.owner = owner,
    this.status = 'normal',
    this.hungry = true
}


// Instances of Dog
// Needed: sadie, moonshine, atticus

const sadie = new Dog('black', 'mason') 
const moonshine = new Dog() 
const atticus = new Dog()

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
    this.name = name,
    this.cool = cool
}

Human.prototype.pet = function(dog) {
    return dog.status = 'happy';
}

Human.prototype.feed = function(dog) {
    return dog.hungry = false;
}
// Instances of Human
// Needed: mason, julia

const mason = new Human(false)
const julia = new Human(true)

mason.feed(sadie)