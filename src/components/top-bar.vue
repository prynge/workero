<template>

	<v-app-bar
		id="top-bar"
		color="white"
		elevate-on-scroll
		fixed
		app
	>
		
		<v-btn icon>
			<v-icon>search</v-icon>
		</v-btn>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>settings</v-icon>
		</v-btn>

	</v-app-bar>

</template>

<script type="text/javascript">

    export default {
        props : {
            
        },
        data () {
        	return {

        	}
        },
        beforeCreate () {
        		
        },
        created () {

        },
        methods : {

        },
        beforeDestroy () {

        }
    }

</script>

<style lang="scss">

    #top-bar {

    }

</style>