<template>
    <div id="page-home">
        <h1 class="texte--text"> Liste des projets</h1>
        <h4 class="grey--text"> Vue d'ensemble de l'avencement des projets </h4>
        <v-row dense v-if="projectsModel.loaded" class="d-flex justify-space-between">
            <v-col v-for="project in projectsModel.data" :key="project.id" >
                <project_card @cardClicked="showDetails" :project="project" :selected="key==project.id"></project_card>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <div class="mt-16" v-if="code!=null">
            <h1 class="texte--text"> {{code}} | <span>Priorisation des tâches</span></h1>
            <h4 class="grey--text"> Quel est le planning pour aujourd'hui ? </h4>
            <draggable_card :detail="details"></draggable_card>
        
        </div>
    </div>
</template>

<script>
import draggable_card from "@/components/draggable-card";
import project_card from "@/components/project-card";
export default {
    name: 'page-home',
    data(){
        return{
            code:null,
            key:null,
            details : [
                {
                    label:"dév.",
                    texte: "Refonte navigation latérale",
                    avatars: [
                        {
                            imgSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt:"John"
                        },
                        {
                            imgSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt:"John"
                        },
                        {
                            imgSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt:"John"
                        },
                    ]
                },
                {
                    label:"ano.",
                    texte: "Paiment refusé sur la version Android",
                    avatars: [
                        {
                            imgSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt:"John"
                        },
                        {
                            imgSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt:"John"
                        }
                    ]
                },
                {
                    label:"dév.",
                    texte: "Audit ESXi - revue & documentation des assets",
                    avatars: [
                        {
                            imgSrc: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt:"John"
                        },
                    ]
                }
            ]
        }
    },
    components: {
        draggable_card,
        project_card
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
