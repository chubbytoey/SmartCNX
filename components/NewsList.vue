<template>
<div class="news-container">
  <div class="news-title">
    สมาคมธุรกิจท่องเที่ยวเชียงใหม่ แถลง “Art for elephant” การกุศล ที่ศิริปันนา
  </div>
  <div class="news-time">
    12/12/2020, 12:12 PM
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.news-container {
  width: 100%;
  height: 50px;
  border-bottom: rgb(0,0,0,0.05) 1px solid;
  font-size: 14px;
  color:#2196F3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .news-time {
    color:rgb(0,0,0,0.65);
    margin-right: 124px;
  }
  & > .news-title {
    margin-left: 24px;
  }
}
</style>
