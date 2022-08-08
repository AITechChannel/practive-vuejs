import { createStore } from "vuex";

import taskApi from "../api/taskApi";

const store = createStore({
  state: {
    tasks: [],
  },
  mutations: {
    initTask: function (state, data) {
      state.tasks = data;
    },

    addTask: function (state, payload) {
      state.tasks.push(payload);
    },

    delTask: function (state, idTodo) {
      const indexTodo = state.tasks.indexOf(store.getters.thisTask(idTodo));

      state.tasks.splice(indexTodo, 1);
    },

    updTask: function (state, payload) {
      const indexTodo = state.tasks.indexOf(store.getters.thisTask(payload.id));
      console.log(indexTodo);

      console.log(payload);

      state.tasks[indexTodo].content = payload.content.content;
    },
  },

  getters: {
    thisTask: (state) => (idTodo) => {
      return state.tasks.find((todo) => todo.id === idTodo);
    },
  },

  actions: {
    async initTask({ commit }) {
      try {
        const data = await taskApi.getActiveTasks();

        console.log("init", data);

        commit("initTask", data);
      } catch (error) {}
    },

    async createTask({ commit }, payload) {
      try {
        // commit("addTask", payload);
        const data = await taskApi.createTask(payload);

        console.log("add", data);

        commit("addTask", data);
      } catch (error) {}
    },

    async delTask({ commit }, payload) {
      try {
        commit("delTask", payload);

        const data = await taskApi.delTask(payload);

        console.log("del", data);
      } catch (error) {}
    },

    async updateTask({ commit }, payload) {
      try {
        console.log("sdfsf");
        commit("updTask", payload);

        const data = await taskApi.updateTask(payload);

        console.log("update", data);
      } catch (error) {}
    },
  },
});

export default store;
