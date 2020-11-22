<template>
  <v-row>
    <v-col style="padding-top: 0 !important">
      <v-text-field
        outlined
        label="회의 내용을 적어주세요."
        prepend-icon="mdi-human-male-female"
        hide-details="auto"
        width="270"
        :rules="rules"
        v-model="name"
        @change="setName"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    rules: [(value) => !!value || "Required."],
    name: "",
  }),
  methods: {
    setName() {
      this.$store.commit("setName", this.name);

      // let newMeeting = this.$store.state.newMeeting
      // newMeeting['name'] = this.name
      // this.$store.commit('setNewMeeting', newMeeting)
    },
  },
};
</script>

<style>
</style>