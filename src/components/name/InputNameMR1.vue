<template>
  <v-row>
    <v-col>
      <v-text-field
        outlined
        label="작성자의 이름을 적어주세요."
        prepend-icon="mdi-human-male-female"
        hide-details="auto"
        width="270"
        :rules=rules
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
}),
}
</script>

<style>

</style>