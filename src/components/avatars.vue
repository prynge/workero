<template>
    <div class="d-flex flex-row align-center">
        <div class="avatar">
            <v-avatar v-for="(avatar,i) in showable" :key=i>
                <img
                    v-if="i<3"
                    :src="avatar.profile_picture"
                    :alt="avatar.firstname"
                >
            </v-avatar>
        </div>
        <div v-if="nb_worker - 3 > 0" class="ml-5 grey--text text-body-1 text--lighten-1 font-weight-bold">
            +{{nb_worker - 3}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nb_worker:0,
            showable:[]
        }
    },
    props:{
        avatars:Array

    },
    created(){
        this.nb_worker=this.avatars.length
        this.showable=this.avatars.slice(0,3)
    },
    watch:{
        avatars: function(avatars){
            this.nb_worker=avatars.length
            this.showable=avatars.slice(0,3)
        }
    },
    computed:{
        employees(){
            return this.$store.state.employees.data;
        },
        loadedEmployees(){
            return this.$store.state.employees.loaded;
        },

    }
}
</script>


<style scoped lang="scss">
    #draggable {  
        .v-avatar {
            margin-right: -10px;
        }
    }
</style>