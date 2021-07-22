import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: ['tarea 1', 'tarea 2', 'tarea 3']
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        todos
    }
    });