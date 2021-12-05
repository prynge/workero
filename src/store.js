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

        }

    }
})
