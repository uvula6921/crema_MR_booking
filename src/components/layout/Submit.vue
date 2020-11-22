<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-btn
      tile
      color="indigo darken-4"
      elevation="15"
      class="mt-2 primary"
      @click="saveEvent"
      :disabled="!isAvailable"
    >
      <v-icon left>
        mdi-checkbox-marked-circle-outline
      </v-icon>
      예약하기
    </v-btn>
  </v-row>
</template>

<script>
export default {
  props: {
    isAvailable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mrNum() {
      return this.$route.query.mrNum
    }
  },
  methods: {
    saveEvent() {
      let mrKey = `mr${this.mrNum}`
      let currentMR = this.$store.state[mrKey]
      let newMeeting = { ...this.$store.state.newMeeting }
      console.log('newMeeting', newMeeting)
      currentMR.push(newMeeting)
    
      this.$store.commit(`setMr${this.mrNum}`, currentMR);
    }
  }
}
</script>

<style>

</style>