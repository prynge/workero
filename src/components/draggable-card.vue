<template>
    <div>
        <draggable>
            <v-card class="my-3 row" v-for="(card,i) in detail" :key="i">
                <v-card-text class="d-flex flex-row align-center">
                    <v-icon class="mx-5">drag_handle</v-icon>
                    <v-chip v-if="card.label=='dév.'"
                    color="purple lighten-5"
                    text-color="purple"
                    label>
                    dév.</v-chip>
                    <v-chip v-else-if="card.label=='ano.'"
                    color="orange lighten-5"
                    text-color="orange"
                    label>
                    ano.</v-chip>
                    <p class="text-h6 ml-5 mb-0">{{card.texte}}</p>
                    <v-spacer></v-spacer>
                    <div>
                        <avatars :avatars="card.avatars" ></avatars>
                    </div>
                </v-card-text>
            </v-card>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import Avatars from "@/components/avatars.vue";
export default {
    name: "draggable-card",
    props: {
        detail:Array,
    },
    components: {
        draggable,
        Avatars
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