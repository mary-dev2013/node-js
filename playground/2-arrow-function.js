//function 
const square = function (x){
    return x * x 
}

//Arrow Functions ES6
const square = (x) => {
    return x * x
}

//Shorthand Syntax ES6
const square = (x) => x * x

console.log(square(2))

//this Binding
const event = {
    name: 'Birthday Party',
    printGuestList: function (){
        console.log('Guest list for ' + this.name)
    }
}

event.printGuestList()