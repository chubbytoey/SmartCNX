<template>
<div class="container">
  <div class="filter">
    <div class="filter-sub">
      <select>
        <option>ทุกหมวดหมู่</option>
      </select>
      <select>
        <option>ทุกสถานะ</option>
      </select>
    </div>
    <div class="filter-sub">
      <select>
        <option>เรียงตามวันที่</option>
      </select>
    </div>
  </div>
  <div class="report">
    <List />
    <List />
  </div>
</div>
</template>

<script>
import List from '../components/ReportList'
export default {
  components: {
    List
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  & > .filter {
    height: 56px;
    background-color: #fff;
    border-bottom: 1px solid rgb(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > :first-child {
      margin-left: 40px;
    }
    & > :last-child {
      margin-right: 40px;
    }
    & > .filter-sub {
      width: fit-content;
      & > select {
        width: 140px;
        height: 40px;
        border-radius: 4px;
        border:1px solid rgb(0,0,0,0.1);
        padding-left: 16px;
      }
    }
  }
  & > .report {
    padding-top:40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > :last-child {
      margin-bottom: 0;
    }
  }
}
</style>
