<template>
  <v-container>
    
    시작 시간<v-select :items="options" v-model="selectedTime" @change="changeTime"></v-select>
    끝나는 시간 <v-select :items="options" v-model="selectedTime" @change="changeTime"></v-select>
    {{ selectedTime }}
    {{ availableText }}
  </v-container>
</template>

<script>
export default {
  name: 'SelectEndTimeMR1',
  data() {
    return {
      selectedTime: '5시',
      options: [1,2,3],
      isAvaliable: false
    }
  },
  computed: {
    availableText() {
      if (this.isAvaliable) return '가능한 시간 입니다'
      else return '불가능한 시간 입니다. 다시 선택해주세요'
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      this.options = Array.from({ length: 11 }, (v, i) => `${i+9}시`)
    },
    changeTime() {
      console.log('changeTime');

      // 선택된 시간이 가능한 시간인지 검사
      let schedules = this.$store.state.mr1
      console.log('schedules', schedules);
      
      let isAvaliable = true
      schedules.forEach(schedule => {
        
      })
      
      
      
    }
  }
}
</script>

<style>

</style>