<template>
  <v-container>
    <v-row
      justify="space-around"
      align="center"
    >
      <v-col 
        cols="12"
        class="mt-12"
        align="center"
      >
        <p
          class="font-weight-bold title mb-0"
        >
          회의 예약할 시간 선택
        </p>
      </v-col>
      <v-col style="width: 350px; flex: 0 1 auto;">
        <h2>Start:</h2>
        <v-time-picker
          v-model="start"
          :max="end"
          elevation="15"
          :allowed-minutes="allowedMinutes"
          color="indigo darken-4"
        ></v-time-picker>
      </v-col>
      <v-col style="width: 350px; flex: 0 1 auto;">
        <h2>End:</h2>
        <v-time-picker
          v-model="end"
          :min="start"
          elevation="15"
          :allowed-minutes="allowedMinutes"
          color="indigo darken-4"
        ></v-time-picker>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SelectTimeMain',
  data() {
    return {
      start: null,
      end: null,
    }
  },
  computed: {
    availableText() {
      if (this.isAvailable) return '가능한 시간 입니다'
      else return '불가능한 시간 입니다. 다시 선택해주세요'
    }
  },
  methods: {
    changeTime() {
      // 선택된 시간이 가능한 시간인지 검사
      let schedules = this.$store.state.mr1
      console.log('schedules', schedules);
      
      let isAvailable = true
      schedules.forEach(schedule => {
        
      })
    },
    allowedMinutes: v => v % 5 === 0,
  }
}
</script>

<style>

</style>