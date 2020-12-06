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
          <div>{{ availableText }}</div>
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
  data: () => ({
    AvailableMRNums: [],
  }),
  computed: {
    newMeeting() {
      return this.$store.state.newMeeting;
    },
    availableText() {
      if (this.AvailableMRNums.length) return `${this.AvailableMRNums} 이용불가능한 시간 입니다`;
    },
  },
  watch: {
    newMeeting() {
      this.checkAvailableMRNum();
    },
  },
  methods: {
    // 불가능한 MRNum을 확인하여 AvailableMRNums 세팅
    checkAvailableMRNum() {
      let inputStart = new Date(this.newMeeting["start"]);
      let inputEnd = new Date(this.newMeeting["end"]);
      let meetings = [ 
        ...this.$store.state['mr1'],
        ...this.$store.state['mr2'],
        ...this.$store.state['mr3']
        // 회의실이 추가되는걸 고려해서 변수화하려면 어떻게 해야하지?
      ]
      let mrIndexes = [];
      meetings.forEach(function(meeting, index, meetings) {
        let start = new Date(meeting["start"]);
        let end = new Date(meeting["end"]);
        let isAvailable = (!(start <= inputStart && inputStart < end) && !(inputStart <= start && start < inputEnd));
        if (!isAvailable) {
          mrIndexes.push(meeting.mrIndex);
        };
      });
      this.AvailableMRNums = mrIndexes;
    },
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