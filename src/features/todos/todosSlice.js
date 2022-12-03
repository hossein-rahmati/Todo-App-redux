import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // create an object
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    toggleTodo: (state, action) => {
      const todoToCheck = state.todos.find((t) => t.id === action.payload.id);
      todoToCheck.completed = !todoToCheck.completed;
    },

    deleteTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (t) => t.id !== action.payload.id
      );
      state.todos = filteredTodos;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
