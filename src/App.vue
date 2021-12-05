<template>
    <v-app class="fond">

        <left-drawer/>
        <v-container>
        <v-main>
            <top-bar/>
            <router-view></router-view>
        </v-main>
        </v-container>

    </v-app>
</template>

<script type="text/javascript">

    import leftDrawer from "@/components/left-drawer";
    import topBar from "@/components/top-bar";

    export default {
        props : {
            
        },
        components : {
            leftDrawer,
            topBar
        },
        data () {
            return {

            }
        },
        methods : {

        },
        beforeDestroy () {

        }
    }

</script>

<style lang="scss">
    .fond{
        background-color: #f2f5fa !important;
    }
</style>
