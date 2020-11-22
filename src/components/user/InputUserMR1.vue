<template>
  <v-row>
    <v-col style="padding-top: 0 !important;">
      <v-text-field
        outlined
        label="작성자의 이름을 적어주세요."
        prepend-icon="mdi-human-male-female"
        hide-details="auto"
        width="270"
        :rules=rules
        @change="setUser"
        v-model="user"
        autocomplete="false"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || 'Required.',
    ],
    user: ''
  }),
  methods: {
    setUser() {
      this.$store.commit('setUser', this.user)
      
      // let newMeeting = this.$store.state.newMeeting
      // newMeeting['name'] = this.name
      // this.$store.commit('setNewMeeting', newMeeting)
    }
  }
}
</script>

<style>

</style>