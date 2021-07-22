import axios from "axios";
import { tareaService } from "../../services/tareaService";

const baseUrl = "http://localhost:3000/tareas/";
const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => {
    return state.todos;
  },
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(baseUrl);

    commit("setTodos", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(baseUrl + id);

    commit('removeTodo', id);
    },
    async updateTodo({ commit }, updatedTodo) {
      const response = await axios.put(baseUrl + updatedTodo.id, updatedTodo);
  
      commit('updateTodo', response.data);
    },
    async addTodo({commit},tarea){
      const response = await axios.post(baseUrl,
      {tarea:tarea,isFinished:false})

      commit('addTodo',response.data)
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  removeTodo:(state,id) => state.todos = state.todos.filter((tareas) => tareas.id !== id),
  updateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(tareas => tareas.id === updatedTodo.id);

    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  addTodo:(state,newTodo) => state.todos.unshift(newTodo)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
