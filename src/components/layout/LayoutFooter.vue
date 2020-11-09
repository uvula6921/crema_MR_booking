<template>
  <div>
    <v-app-bar
      color="blue darken-4"
      light
      class="d-flex justify-center align-center flex-column py-16"
    >
      <v-toolbar-title
        class="align-self-center"
      >
        <v-btn @click.stop="drawer = !drawer"
          class="pr-6"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          {{this.$store.state.menus[0]}} 예약하기
        </v-btn>
      </v-toolbar-title>  

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="500"
    >
      <v-btn @click.stop="drawer = !drawer"
        fab
        dark
        small
        color="primary"
        absolute
        right
        class="mr-n3 mt-1"
      >
        <v-icon dark>
          mdi-window-close
        </v-icon>
      </v-btn>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <DatePicker></DatePicker>
          </v-list-item>
          <v-list-item>
            <SelectStartTimeMain/>
          </v-list-item>
          <v-list-item>
            <InputNameMR1/>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DatePicker from "@/components/layout/DatePicker.vue";
import SelectStartTimeMain from "@/components/time/SelectStartTimeMain.vue";
import InputNameMR1 from "@/components/name/InputNameMR1.vue";

export default {
  components: {
    DatePicker,
    SelectStartTimeMain,
    InputNameMR1
  },
  data: () => ({
    drawer: null,
    // group: null,
  }),

  watch: {
    // group () {
    //   this.drawer = false
    // },
  },
}
</script>

<style>

</style>