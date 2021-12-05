<template>

	<v-navigation-drawer
			id="left-drawer"
        	permanent
			app
          >
            <v-list>
              <v-list-item class="px-2">
                  <img alt="Workero logo" src="@/assets/logo.png">
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
                <v-list-item-group v-model="selectedItem">
				<v-list-item link v-for="(nav, i) in navigation" :key="i"
					@click="gotoPage(nav.code,i)" active-class="texte white--text"
				>
					<v-list-item-icon>
						<v-icon :class="{'white--text':selectedItem==i}" outlined>{{nav.icon}}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{nav.label}}</v-list-item-title>
				</v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

</template>

<script type="text/javascript">

    export default {
        props : {
            
        },
        data () {
        	return {
                selectedItem: null
        	}
        },
        beforeCreate () {
        		
        },
        created () {
        	this.selectedItem = this.navigation.findIndex((element)=>{
                return element.code == this.currentRouteCode
            })
        },
        computed : {
        	navigation () {
        		return this.$store.state.navigation;
        	},
            currentRouteCode () {
                return this.$router.history.current.path.substring(1)
            }
        },
        methods : {
        	gotoPage (pageCode,i) {
        		this.$router.push({ name : `${pageCode}Page` });
        	}
        }
    }

</script>

<style lang="scss">

    #left-drawer {
        .selected {

        }
    }

</style>