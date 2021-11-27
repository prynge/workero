import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navigation : [
            {
                code : 'home',
                label : 'Accueil'
            },
            {
                code : 'team',
                label : 'Équipe'
            }
        ]
    },
    mutations: {

    },
    actions: {

    }
})
