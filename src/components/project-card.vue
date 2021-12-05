<template>
    <v-hover v-slot="{hover}">
        <v-card
            @click="clck(project.code, project.id)"
            rounded="lg"
            :elevation="hover ? 12 : 2"
            :class="{'on-hover':hover||selected}">
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
                <avatars :avatars="avatars"></avatars>
            </v-card-text>
            <v-card-actions v-if="hover||selected">
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
import avatars from "@/components/avatars"
import Avatars from './avatars.vue'
export default {
    name: "project-card",
    data(){
        return{
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
        }
    },
    props:{
        project: Object,
        selected:Boolean
    },
    components:{
        avatars,
        Avatars
    },
    methods: {
        clck(code, key){
            // this.selected = !this.selected
            this.$emit('cardClicked', code, key  )
        }
    }
}
</script>
