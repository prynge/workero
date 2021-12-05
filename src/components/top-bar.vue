<template>
	<v-app-bar
		id="top-bar"
		color="fond"
		elevate-on-scroll
		fixed
		app
	>
		<v-card>
			<v-btn icon>
				<v-icon>search</v-icon>
			</v-btn>
		</v-card>

		<v-spacer></v-spacer>

		<v-card class="mr-4">
			<v-btn icon>
				<v-icon>settings</v-icon>
			</v-btn>
		</v-card>

		<v-card color="bleu_clair" elevation="0" class="mr-4">
			<v-avatar>
				<v-badge avatar>
					<span class="">PM</span>
				</v-badge>
			</v-avatar>
		</v-card>
		<v-card elevation="0" color="fond">
			<h3 class="texte--text">Paul Montard</h3>
			<span class="grey--text">paul-montard@gmail.com</span>
		</v-card>
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
			padding-left: 50px;
			padding-right: 50px;
    }

</style>