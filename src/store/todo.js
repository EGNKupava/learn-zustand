import {create} from "zustand";

const initialTodos = {
  1: {id: 1, title: "json-server", description: "todo smt", isDone: false},
};

const initialOrder = ["1"];

const delay = async (time = 1000) =>
  new Promise((res) => setTimeout(res, time));

export const useTodoStore = create((set) => ({
  todos: initialTodos,
  order: initialOrder,
  isLoading: false,
  fetch: async () => {
    set({isLoading: true});
    await delay(3000);
    try {
      const res = await fetch("http://localhost:3000/todo");
      const {todos, order} = await res.json();
      set({todos, order, isLoading: false});
    } catch (err) {
      console.error("Error", err);
    }
  },
  addTask: (task) =>
    set((state) => ({
      todos: {
        ...state.todos,
        [task.id]: task,
      },
      order: [task.id, ...state.order],
    })),
  removeTask: (currentId) =>
    set((state) => {
      const itemPosition = state.order.findIndex((id) => id === currentId);
      const todosCopy = {...state.todos};
      const copyOrder = [...state.order];
      copyOrder.splice(itemPosition, 1), delete todosCopy[currentId];
      return {
        order: copyOrder,
        todos: todosCopy,
      };
    }),
  changeStatus: (currentId, isDone) =>
    set((state) => ({
      todos: {
        ...state.todos,
        [currentId]: {
          ...state.todos[currentId],
          isDone,
        },
      },
    })),
  move: (order) =>
    set({
      order,
    }),
}));
