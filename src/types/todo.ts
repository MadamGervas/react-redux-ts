
export interface TodoState{
      todos: any[];
      loading: boolean;
      error: null | string;
      page: number;
      limit: number;
}

export enum TodoActionTypes{
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGES = 'SET_TODO_PAGES',
}

interface fetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS;
}

interface fetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface fetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGES;
    payload: number;
}

export type TodoAction = fetchTodoAction | fetchTodoSuccessAction | fetchTodoErrorAction | SetTodoPage

