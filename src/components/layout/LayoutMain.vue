<template>
  <v-row>
    <v-col cols="9">
      <!-- 메인 영역 -->
      <v-row class="fill-height">
        <v-col cols="4">
        </v-col>
        <v-col cols="4">
          <v-card
            class="d-flex justify-center align-center"
            height="100%"
            width="100%"
            color="blue-grey darken-4"
          >
            <v-btn
              to="/massagechair"
              height="50"
            >
              마사지 의자</br>사주세요...
            </v-btn>
          </v-card>
        </v-col>

        <v-col cols="12">
          <SelectTimeMain/>
        </v-col>
        
        <v-col cols="12" class="d-flex align-end">
          <ScrollBanner/>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="3" class="pa-0 d-flex flex-column justify-space-between">
      <v-card
        class="d-flex justify-center align-center"
        height="30%"
        width="100%"
        v-for="(menu, index) in this.$store.state.menus"
        :key="`menu_${index}`"
        color="blue-grey darken-4"
      >
        <v-btn :to="`/mr?mrNum=${index + 1}`">{{menu}}</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
  
<script>
import SelectTimeMain from '@/components/time/SelectTimeMain'
import ScrollBanner from '@/components/layout/ScrollBanner'

export default {
  name: "LayoutMain",
  components: {
    SelectTimeMain,
    ScrollBanner
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>