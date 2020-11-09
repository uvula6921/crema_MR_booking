<template>
  <v-row>
    <v-col cols="9">
      <!-- 메인 영역 -->
      <v-row class="fill-height">
        <v-col cols="12">
          <!-- 텍스트 -->
          Text
        </v-col>

        <v-col cols="12">
          <!-- 시간 선택 -->
          시간 선택
          <SelectStartTimeMain/>
        </v-col>
        
        <v-col cols="12">
          <!-- 애니메이션 -->
          애니메이션
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="3" class="pa-0 d-flex flex-column justify-space-between">
      <v-card
        class=""
        height="30%"
        width="100%"
        v-for="(menu, index) in this.$store.state.menus"
        :key="`menu_${index}`"
      >
        <v-btn :to="`/mr${index + 1}`">{{menu}}</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
  
<script>
import SelectStartTimeMain from '@/components/time/SelectStartTimeMain'

export default {
  name: "LayoutMain",
  components: {
    SelectStartTimeMain
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