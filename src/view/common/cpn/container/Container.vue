<script setup>

defineProps({
  title: {
    type: String,
    default: 'default title'
  },
  itemList: {
    type: Object,
    default: () => ({})
  }
})

</script>
<template>

<div class="box">
  <h2 class="title">{{ title }}</h2>
  <ul class="list">
    <template v-for="item in itemList" v-key="item.url">
      <li class="item">
        <a :href="item.url" target="_blank">{{ `${item.name} ${item.url}` }}</a>
      </li>
    </template>
  </ul>
</div>

</template>
<style lang="less" scoped>

.box {
  margin: 20px auto;
  width: 70vw;
  padding: 10px 20px;
  
  border-radius: 15px;
  background: #ffffffe6;
  box-shadow: 0 0.5rem 0.625rem #d4d4d44d;
}

.title {
  margin-bottom: 5px;
  color: #212529;
  font-size: 18px;
  font-weight: normal;
}

.list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  .item {
    padding: 15px;
    color: #555;
    font-size: 15px;

    &:hover {
      a {
        color: #f472b6;
      }
    }
  }
}

</style>