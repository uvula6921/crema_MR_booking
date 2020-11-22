<template>
  <v-row>
    <v-col
      cols="12"
      sm="12"
      class="px-1"
    >
      <v-date-picker
        ref="picker"
        v-model="date"
        :picker-date.sync="pickerDate"
        full-width
        elevation="15"
        :show-current="true"
        color="indigo darken-4"
        @change="changeDate"
      ></v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    pickerDate: null,
  }),
  watch: {
    
  },
  methods: {
    changeDate() {
      let newMeeting = this.$store.state.newMeeting
      let { start, end } =  newMeeting
      let startTime = this.date + start.substr(-6);
      let endTime = this.date + end.substr(-6)
      this.$store.commit('setStart', startTime)
      this.$store.commit('setEnd', endTime)
    }
  }
}
</script>

<style>
.v-date-picker-table--date .v-btn {
  height: 25px;
}
.v-time-picker-title__time .v-picker__title__btn, .v-time-picker-title__time span {
  height: 20px;
  font-size: 40px;
}
</style>