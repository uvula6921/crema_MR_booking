<template>
  <div class="layout_footer">
    <v-app-bar
      color="blue-grey darken-4"
      light
      class="d-flex justify-center align-center flex-column py-16"
      style="height: 100%"
    >
      <v-toolbar-title class="align-self-center">
        <v-btn @click.stop="drawer = !drawer" class="pr-6">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          {{ this.$store.state.menus[0] }} 예약하기
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary width="500">
      <v-btn
        @click.stop="drawer = !drawer"
        fab
        dark
        small
        color="indigo darken-4"
        absolute
        right
        class="mr-n3 mt-1 blue-grey darken-4"
      >
        <v-icon dark> mdi-window-close </v-icon>
      </v-btn>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <DatePicker></DatePicker>
          <SelectTimeMR1 />
          <InputUserMR1 />
          <InputNameMR1 />
          <Submit :isAvailable="isAvailable" />
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DatePicker from "@/components/layout/DatePicker.vue";
import SelectTimeMR1 from "@/components/time/SelectTimeMR1.vue";
import InputUserMR1 from "@/components/user/InputUserMR1.vue";
import InputNameMR1 from "@/components/event/InputNameMR1.vue";
import Submit from "@/components/layout/Submit.vue";

export default {
  components: {
    DatePicker,
    SelectTimeMR1,
    InputUserMR1,
    Submit,
    InputNameMR1,
  },
  data: () => ({
    drawer: null,
    group: null,
    isAvailable: false,
  }),
  computed: {
    newMeeting() {
      return this.$store.state.newMeeting;
    },
    mrNum() {
      return this.$route.query.mrNum;
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
    newMeeting() {
      this.checkAvailable();
    },
  },

  methods: {
    // 변경된 시간을 확인하여, 가능한지 isAvailable 세팅
    checkAvailable() {
      console.log("checkAvailable");

      let inputStart = new Date(this.newMeeting["start"]);
      let inputEnd = new Date(this.newMeeting["end"]);
      console.log("inputStart", inputStart);
      console.log("inputEnd", inputEnd);

      let meetings = this.$store.state[`mr${this.mrNum}`];
      console.log("meetings", meetings);

      this.isAvailable = meetings.every((meeting, index) => {
        // 로직: let isAvailable = !(startDate <= inputStart && inputStart <= endDate) && !(inputStart <= startDate && startDate <= inputEnd)

        let start = new Date(meeting["start"]);
        let end = new Date(meeting["end"]);
        let isAvailable = this.getIsAvaliable(inputStart, inputEnd, start, end);
        console.log("isAvailable", isAvailable);

        return isAvailable;
      });
    },
    getIsAvaliable(inputStart, inputEnd, startDate, endDate) {
      return (
        !(startDate <= inputStart && inputStart <= endDate) &&
        !(inputStart <= startDate && startDate <= inputEnd)
      );
    },
  },
};
</script>

<style>
.layout_footer {
  height: calc(100% - 56px - 652px);
}
</style>