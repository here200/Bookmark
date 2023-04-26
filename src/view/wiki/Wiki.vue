<script setup>

import Container from '../common/cpn/container/Container.vue';
import {wikiData} from '@/static/data/wikiData'

</script>
<template>

<div class="wiki">
  <template v-for="item in wikiData" v-key="item.title">
    <container :title="item.title" :itemList="item.list"></container>
  </template>
</div>

</template>
<style lang="less" scoped>
</style>