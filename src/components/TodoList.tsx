import React, {useEffect} from 'react';
import {useTypedSelector} from "../hook/useTypedSelector";
import {useActions} from "../hook/useActions";

const TodoList: React.FC = () => {
    const {todos, error, limit, page, loading} = useTypedSelector(state => state.todo)
    const {fetchTodos} = useActions()

    useEffect(() => {
        fetchTodos(page, limit)
    }, [])

    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id} {todo.title}</div>)}
        </div>
    );
};

export default TodoList;