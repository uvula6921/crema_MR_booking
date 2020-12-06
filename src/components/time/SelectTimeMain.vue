<template>
  <v-container>
    <v-row justify="space-around" align="center">
      <v-col cols="12" class="mt-12" align="center">
        <p class="font-weight-bold title mb-0">오늘 회의 예약할 시간 선택</p>
      </v-col>
      <v-col style="width: 350px; flex: 0 1 auto">
        <h2>Start:</h2>
        <v-time-picker
          v-model="start"
          :max="end"
          elevation="15"
          :allowed-minutes="allowedMinutes"
          color="indigo darken-4"
          @change="changeStart"
        ></v-time-picker>
      </v-col>
      <v-col style="width: 350px; flex: 0 1 auto">
        <h2>End:</h2>
        <v-time-picker
          v-model="end"
          :min="start"
          elevation="15"
          :allowed-minutes="allowedMinutes"
          color="indigo darken-4"
          @change="changeEnd"
        ></v-time-picker>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SelectTimeMain",
  data: () => ({
    start: null,
    end: null,
    mrIndex: [1,2,3],
  }),
  methods: {
    changeStart() {
      let newMeeting = this.$store.state.newMeeting
      let { start } =  newMeeting
      let startTime = start.substr(0, 11) + this.start
      this.$store.commit('setStart', startTime)
    },
    changeEnd() {
      let newMeeting = this.$store.state.newMeeting
      let { end } =  newMeeting
      let endTime = end.substr(0, 11) + this.end
      this.$store.commit('setEnd', endTime)
    },
    allowedMinutes: (v) => v % 5 === 0,
  },
};
</script>

<style>
</style>