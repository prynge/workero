<template>
    <div id="page-home">
        Liste des projets
        <div v-if="projectsModel.loaded">
            {{projectsModel.data}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'page-home',
    components: {

    },
    created () {
        this.$store.dispatch('loadProjects');
    },
    computed : {
        projectsModel () {
            return this.$store.state.projects;
        }
    }
}

</script>

<style lang="scss">
    #page-home {

    }
</style>
