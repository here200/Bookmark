<script setup>

import Container from '../common/cpn/container/Container.vue';
import {bookmarkData} from '@/static/data/bookmarkData'

</script>
<template>

<div class="bookmark">
  <template v-for="item in bookmarkData" v-key="item.title">
    <container :title="item.title" :itemList="item.list"></container>
  </template>
</div>

</template>
<style lang="less" scoped>
</style>