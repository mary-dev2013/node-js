const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true       
    },{
        text: 'clean yard',
        completed: false
    },{
        text: 'File course',
        completed: false 
    }],
    getTaskToDo: function (){
        return this.tasks.filter((task) => task.completed === false )
    }
}

console.log(tasks.getTaskToDo())