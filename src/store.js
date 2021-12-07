import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        /*
        ** Navigation data
        */

        navigation : [
            {
                icon: 'home',
                code : 'home',
                label : 'Accueil'
            },
            {
                icon: 'people_alt',
                code : 'team',
                label : 'Équipe'
            },
            {
                icon: 'calendar_today',
                code : 'activity',
                label : 'Activités & congés'
            },
            {
                icon: 'euro',
                code : 'expenses',
                label : 'Notes de frais'
            }
        ],

        /*
        ** Project models
        ** loading : request had been sent, waiting for response
        ** loaded : data is loaded
        ** data : actual data retrieved from API
        ** error : last fetch resulted in an error
        */

        projects : {
            loading : false,
            loaded : false,
            data : null,
            error : false
        },

        /*
        ** Employee models
        ** loading : request had been sent, waiting for response
        ** loaded : data is loaded
        ** data : actual data retrieved from API
        ** error : last fetch resulted in an error
        */

        employees : {
            loading : false,
            loaded : false,
            data : null,
            error : false
        },

        /*
        ** Task models
        ** loading : request had been sent, waiting for response
        ** loaded : data is loaded
        ** data : actual data retrieved from API
        ** error : last fetch resulted in an error
        */

        tasks : {
            loading : false,
            loaded : false,
            data : null,
            error : false
        },

        /*
        ** Affectation models
        ** loading : request had been sent, waiting for response
        ** loaded : data is loaded
        ** data : actual data retrieved from API
        ** error : last fetch resulted in an error
        */

        affectations : {
            loading : false,
            loaded : false,
            data : null,
            error : false
        }
    },
    mutations: {

        /*
        ** Projects
        */

        setProjectsLoading (state, value) {
            state.projects.loading = value;
        },
        setProjectsLoaded (state, value) {
            state.projects.loaded = value;
        },
        setProjectsData (state, value) {
            state.projects.data = value;
        },
        setProjectsError (state, value) {
            state.projects.error = value;
        },

        /*
        ** Tasks
        */

        setTasksLoading (state, value) {
            state.tasks.loading = value;
        },
        setTasksLoaded (state, value) {
            state.tasks.loaded = value;
        },
        setTasksData (state, value) {
            state.tasks.data = value;
        },
        setTasksError (state, value) {
            state.tasks.error = value;
        },

        /*
        ** Employees
        */

        setEmployeesLoading (state, value) {
            state.employees.loading = value;
        },
        setEmployeesLoaded (state, value) {
            state.employees.loaded = value;
        },
        setEmployeesData (state, value) {
            state.employees.data = value;
        },
        setEmployeesError (state, value) {
            state.employees.error = value;
        },

        /*
        ** Affectations
        */

        setAffectationsLoading (state, value) {
            state.affectations.loading = value;
        },
        setAffectationsLoaded (state, value) {
            state.affectations.loaded = value;
        },
        setAffectationsData (state, value) {
            state.affectations.data = value;
        },
        setAffectationsError (state, value) {
            state.affectations.error = value;
        }

    },
    actions: {

        loadProjects ({ state, commit }, parameters) {

            if (state.projects.loaded || state.projects.loading) {
                return;
            }

            axios.get('https://my-json-server.typicode.com/P4Thi0ut/workero/projects', {
                params : {}
            })
            .then (response => {
                commit('setProjectsData', response.data);
                commit('setProjectsLoaded', true);
            })
            .catch (response => {
                commit('setProjectsError', true);
            })
            .finally (() => {
                commit('setProjectsLoading', false);
            });

        },
        
        loadEmployees ({ state, commit }, parameters) {

            if (state.employees.loaded || state.employees.loading) {
                return;
            }

            axios.get('https://my-json-server.typicode.com/P4Thi0ut/workero/employees', {
                params : {}
            })
            .then (response => {
                commit('setEmployeesData', response.data);
                commit('setEmployeesLoaded', true);
            })
            .catch (response => {
                commit('setEmployeesError', true);
            })
            .finally (() => {
                commit('setEmployeesLoading', false);
            });

        },

        loadTasks ({ state, commit }, parameters) {

            if (state.tasks.loaded || state.tasks.loading) {
                return;
            }

            axios.get('https://my-json-server.typicode.com/P4Thi0ut/workero/tasks', {
                params : {}
            })
            .then (response => {
                commit('setTasksData', response.data);
                commit('setTasksLoaded', true);
            })
            .catch (response => {
                commit('setTasksError', true);
            })
            .finally (() => {
                commit('setTasksLoading', false);
            });

        },

        loadAffectations ({ state, commit }, parameters) {

            if (state.affectations.loaded || state.affectations.loading) {
                return;
            }

            axios.get('https://my-json-server.typicode.com/P4Thi0ut/workero/task_affectations', {
                params : {}
            })
            .then (response => {
                commit('setAffectationsData', response.data);
                commit('setAffectationsLoaded', true);
            })
            .catch (response => {
                commit('setAffectationsError', true);
            })
            .finally (() => {
                commit('setAffectationsLoading', false);
            });

        },

    }
})
