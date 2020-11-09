<template>
  <v-main>
    <LayoutHeader></LayoutHeader>
    <div>
      <v-sheet tile height="40" class="d-flex mt-n2 mb-3 justify-space-between">
        <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-select
          v-model="type"
          :items="types"
          dense
          outlined
          hide-details
          class="ma-2"
          label="type"
        ></v-select>
        <v-toolbar-title v-if="$refs.calendar" class="h1 px-4 pt-2">
          <v-icon>mdi-calendar</v-icon>
          {{ $refs.calendar.title }}년
        </v-toolbar-title>
        <v-select
          v-model="weekday"
          :items="weekdays"
          dense
          outlined
          hide-details
          label="weekdays"
          class="ma-2"
        ></v-select>
        <v-btn icon class="ma-2" @click="$refs.calendar.next()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          :weekdays="weekday"
          :type="type"
          :events="events"
          :event-overlap-threshold="30"
          :event-color="getEventColor"
          @click:event="showEvent"
          @change="getEvents"
        ></v-calendar>

        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.start"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                닫기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </div>
    <LayoutFooter></LayoutFooter>
  </v-main>
</template>

<script>
import LayoutHeader from "@/components/layout/LayoutHeader.vue";
import LayoutFooter from "@/components/layout/LayoutFooter.vue";

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  },
  data: () => ({
    type: "month",
    types: ["month", "week", "day" /*'4day'*/],
    // weekday: [0, 1, 2, 3, 4, 5, 6],
    weekday: [1, 2, 3, 4, 5],
    weekdays: [
      //{ text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      //{ text: 'Mon, Wed, Fri', value: [1, 3, 5] },
    ],
    value: "",
    events: [],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
  }),
  methods: {
    getEvents({ start, end }) {
      this.events = this.$store.state.mr1;
    },
    getEventColor(event) {
      return event.color;
    },
    
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },

    // 일정 추가 예시
    
  },
};
</script>

<style>
</style>