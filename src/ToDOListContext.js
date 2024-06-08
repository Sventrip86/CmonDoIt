import React, {createContext, useState } from 'react'

// created a ToDoListContext to hold the todolist state
const ToDoListContext = createContext();

// define the provider with children prop for nested component

const ToDoListProvider = ({ children }) => {
    const [ toDoList, setToDoList] = useState([])
}

//add item to the list
const addToDo = (toDo) => {
    //update the list setting the current list and the new toDo
    setToDoList([...toDoList, toDo])
}

//remove item from the list
const removeToDo = (toDo) => {
    // filter matching the id and creates a new array without the todo
    setToDoList(toDoList.filter(toDo => toDo.id !== id))
}


return(
    // context provider wrap the children and value got data and funcions of the context
    <ToDoListContext.Provider value={{toDoList, addToDo, removeToDo}}>
        {children}
    </ToDoListContext.Provider>
)


export { ToDoListProvider, ToDoListContext };
