import React from 'react';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { TodoTitle } from '../../components/TodoTitle/TodoTitle';
import { TodoAddTask } from '../../components/TodoAddTask/TodoAddTask';

function TODOsUI ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }) {
    return(
        <div className="CardContainer">
            <TodoTitle />
            <TodoCounter 
                total = {totalTodos}
                completed = {completedTodos}
            /> 
            <TodoAddTask />
            <CreateTodoButton />
            <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            />           
            <TodoList>
                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
        </div>
    );
}

export { TODOsUI };