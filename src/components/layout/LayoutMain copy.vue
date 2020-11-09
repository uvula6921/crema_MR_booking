<template>
  <div class="main-cont">
    <div class="row-axis">
      <router-link class="massage-chair" to="/massagechair">마사지 의자<br>사주세요...</router-link>
    </div>
    <div class="row-axis">
      <div class="column-axis">
        <router-link class="meeting-room" to="/mr1">Meeting Room 1</router-link>
        <router-link class="meeting-room" to="/mr2">Meeting Room 2</router-link>
        <router-link class="meeting-room" to="/mr3">Meeting Room 3</router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'LayoutMain'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-cont {
  display: flex;
  justify-content: space-between;
}
.row-axis {
  display: inline-flex;
  padding-left: 40vh
}
.column-axis {
  height: 100vh;
}
.massage-chair {
  width: 25vh;
  height: 35vh;
  border: 1px solid #333;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.meeting-room {
  width: 25vh;
  height: calc(100% / 3);
  border: 1px solid #333;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>