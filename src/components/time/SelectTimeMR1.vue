<template>
  <v-container>
    <v-row
      justify="space-around"
      align="center"
      class="time_picker_layer"
    >
      <v-col style="width: 234px; flex: 0 1 auto; padding-top: 0 !important;">
        <h2 style="color: #333 !important;">Start:</h2>
        <v-time-picker
          v-model="start"
          :max="end"
          width="210"
          elevation="15"
          :allowed-minutes="allowedMinutes"
          color="indigo darken-4"
          @change="changeStart"
        ></v-time-picker>
      </v-col>
      <v-col style="width: 234px; flex: 0 1 auto; padding-top: 0 !important;">
        <h2 style="color: #333 !important;">End:</h2>
        <v-time-picker
          v-model="end"
          :min="start"
          width="210"
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
  name: 'SelectTimeMR1',
  data() {
    return {
      start: null,
      end: null,
    }
  },
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
    allowedMinutes: v => v % 5 === 0,
  }
}
</script>

<style>
.v-time-picker-clock__container {
  flex-basis: 210px;
}
.time_picker_layer {
  z-index: 9999;
}
.v-date-picker-table--date .v-btn {
  height: 25px;
}
.v-date-picker-title__date {
  font-size: 23px;
  padding-bottom: 0px;
}
.v-date-picker-table {
  height: 187px;
}
.v-application .my-2 {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
.time_picker_layer .v-picker__title {
  padding-bottom: 8px !important;
}
</style>