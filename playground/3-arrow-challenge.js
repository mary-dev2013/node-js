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
        
        const tasksToDo = this.tasks.filter((task) => {
            return task.completed === false  
        })
        return tasksToDo
    }
}

console.log(tasks.getTaskToDo())