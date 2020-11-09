<template>
  <v-row>
    <v-col
      cols="3"
    >
    </v-col>
    <v-col
      cols="12"
      sm="12"
      class="my-2 px-1 mt-4"
    >
      <v-date-picker
        ref="picker"
        v-model="date"
        :picker-date.sync="pickerDate"
        full-width
        elevation="15"
        :show-current="true"
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
}
</script>

<style>

</style>