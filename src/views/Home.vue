<template>
    <div id="page-home">
        <h1 class="texte--text"> Liste des projets</h1>
        <h4 class="grey--text"> Vue d'ensemble de l'avencement des projets </h4>
        <v-row dense v-if="projectsModel.loaded" class="d-flex justify-space-between">
            <v-col v-for="project in projectsModel.data" :key="project.id" >
                <v-hover
                v-slot="{hover}">
                    <v-card
                        @click="showDetails(project.code, project.id)"
                        rounded="lg"
                        :elevation="hover ? 12 : 2"
                        :class="{'on-hover':hover||key==project.id}">
                        <v-card-title class='font-weight-bold texte--text'>{{project.code}}</v-card-title>
                        <v-card-text>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Statut : <b class="texte--text">{{project.status}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Tâches : <b>{{project.nb_tasks}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Personnes : <b>{{project.nb_workers}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Complétion : <b>{{project.completion}}%</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <div class="d-flex flex-row align-center">
                                <div class="avatar">
                                    <v-avatar>
                                        <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                        >
                                    </v-avatar>
                                    <v-avatar>
                                        <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                        >
                                    </v-avatar>
                                    <v-avatar>
                                        <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                        >
                                    </v-avatar>
                                </div>
                                <div class="ml-5 grey--text text-body-1 text--lighten-1 font-weight-bold">
                                    +3
                                </div>
                            </div>
                        </v-card-text>
                        <v-card-actions v-if="hover||key==project.id">
                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <div class="mt-16" v-if="code!=null">
            <h1 class="texte--text"> {{code}} | <span>Priorisation des tâches</span></h1>
            <h4 class="grey--text"> Quel est le planning pour aujourd'hui ? </h4>
            <div>
                <draggable>
                    <v-card class="my-3 row">
                        <v-card-text class="d-flex flex-row align-center">
                            <v-icon class="mx-5">drag_handle</v-icon>
                            <v-chip 
                            color="purple lighten-5"
                            text-color="purple"
                            label>
                            dév.</v-chip>
                            <p class="text-h6 ml-5 mb-0">Refonte navigation latérale</p>
                            <v-spacer></v-spacer>
                            <div>
                                <v-avatar>
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>
                                <v-avatar>
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>
                                <v-avatar>
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-card class="my-3 row">
                        <v-spacer></v-spacer>
                        <v-card-text class="d-flex flex-row align-center">
                            <v-icon class="mx-5">drag_handle</v-icon>
                            <v-chip 
                            color="orange lighten-5"
                            text-color="orange"
                            label>
                            ano.</v-chip>
                            <p class="text-h6 ml-5 mb-0">Paiment refusé sur la version Android</p>
                            <v-spacer></v-spacer>
                            <div>
                                <v-avatar>
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>
                                <v-avatar>
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-card class="my-3 row">
                        <v-card-text class="d-flex flex-row align-center">
                            <v-icon class="mx-5">drag_handle</v-icon>
                            <v-chip 
                            color="purple lighten-5"
                            text-color="purple"
                            label>
                            dév.</v-chip>
                            <p class="text-h6 ml-5 mb-0">Audit ESXi - revue & documentation des assets</p>
                            <v-spacer></v-spacer>
                            <div>
                                <v-avatar>
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>
                            </div>
                        </v-card-text>
                    </v-card>
                </draggable>
            </div>
        
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    name: 'page-home',
    data(){
        return{
            code:null,
            key:null
        }
    },
    components: {
        draggable
    },
    created () {
        this.$store.dispatch('loadProjects');
    },
    computed : {
        projectsModel () {
            return this.$store.state.projects;
        }
    },
    methods:{
        showDetails(code,key){
            this.code=code
            this.key=key

        }
    }
}

</script>

<style lang="scss">
    #page-home {
        h1 {
            font-size: 3em;
            span {
                font-weight: 400;
            }
        }
        h4{
            font-size: 1.5em;
            font-weight: 400;
        }
        .on-hover{
            border: 4px solid #1d3046
        }
        .v-avatar {
            margin-right: -10px;
        }
    }
</style>
