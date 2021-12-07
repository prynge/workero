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
                <avatars :avatars="workers"></avatars>
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
            workers: []
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
    created(){
        if (!this.employeesModel.loaded && !this.employeesModel.loading){
            this.$store.dispatch("loadEmployees")
        }
        if (!this.tasksModel.loaded && this.tasksModel.loading){
            this.$store.dispatch("loadTasks")
        }
        if (!this.affectationsModel.loaded && this.affectationsModel.loading){
            this.$store.dispatch("loadAffectations")
        }
        if (this.loadedAll){
            this.getAvatars()
        }
    },
    watch:{
        loadedAll: function (loadedAll){
            if (!loadedAll){
                return;
            }
            this.getAvatars()
        }
    },
    computed:{
        affectationsModel(){
            return this.$store.state.affectations
        },
        employeesModel(){

            return this.$store.state.employees;
        },
        tasksModel(){
            return this.$store.state.tasks;
        },
        loadedAll(){
            return this.affectationsModel.loaded && this.employeesModel.loaded && this.tasksModel.loaded;
        }
    },
    methods:{
        clck(code, key){
            this.$emit('cardClicked', code, key  )
        },
        getAvatars(){
            this.tasksModel.data.filter(task => {return task.project_id === this.project.id}).forEach(task=>{
                this.affectationsModel.data.forEach(affectation => {
                    if (affectation.task_id==task.id) {
                        this.employeesModel.data.forEach(employee => {
                            if (employee.id == affectation.employee_id) {
                                this.workers.push(employee)
                            }
                        });
                    }
                });
            })
        }
    }
}
</script>
