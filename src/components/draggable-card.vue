<template>
    <div>
        <SlickList axis="y" v-model:list="tasks">
            <SlickItem v-for="(task,i) in tasks" :key="i" :index="i">
                <v-card class="my-3 row" >
                    <v-card-text class="d-flex flex-row align-center">
                        <v-icon class="mx-5">drag_handle</v-icon>
                        <v-chip v-if="task.type=='DEVELOPMENT'"
                        color="purple lighten-5"
                        text-color="purple"
                        label>
                        dév.</v-chip>
                        <v-chip v-else-if="task.type=='BUG'"
                        color="red lighten-5"
                        text-color="red"
                        label>
                        bug</v-chip>
                        <v-chip v-else 
                        color="orange lighten-5"
                        text-color="orange"
                        label>
                        ano.</v-chip>
                        <p class="text-h6 ml-5 mb-0">{{task.label}}</p>
                        <v-spacer></v-spacer>
                        <div>
                            <Avatars :avatars="getAvatars(task.id)" ></Avatars>
                        </div>
                    </v-card-text>
                </v-card>
            </SlickItem>
        </SlickList>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import Avatars from "@/components/avatars.vue";
export default {
    name: "draggable-card",
    data(){
        return{
            
        }
    },
    props: {
        tasks:Array,
    },
    components: {
        draggable,
        Avatars
    }, 
    created() {
        
    },
    watch:{

    },
    computed:{
        employeesModel () {
            return this.$store.state.employees;
        },
        affectationsModel () {
            return this.$store.state.affectations;
        },
    }, 
    methods:{
        getAvatars(task_id){
            const workers=[]
            this.affectationsModel.data.filter(affectation=>{return affectation.task_id == task_id}).forEach(affectation => {
                this.employeesModel.data.forEach(employee => {
                    if (employee.id == affectation.employee_id) {
                        workers.push(employee)
                    }
                });
            });
            return workers;
        }
    }
}
</script>

<style scoped lang="scss">
    
</style>