<script setup>

import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import useScroll from '@/view/common/hook/useScroll'

const router = useRouter()

const router_records = [
  {name: '书签', path: '/bookmark'},
  {name: 'Wiki', path: '/wiki'},
]

const activeIndex = ref(0)

function itemClick(item, index) {
  router.push(item.path)
  activeIndex.value = index
}

const {scrollTop} = useScroll()
let isOnTop = computed(() => scrollTop.value <= 31 ? 'none' : 'block')
function toTopClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>
<template>

<div class="app">
  <div class="nav">
    <template v-for="(item, index) in router_records" v-key="item.name">
      <div class="item" :class="{active: activeIndex === index}" 
        @click="itemClick(item, index)">{{ item.name }}</div>
    </template>
  </div>

  <!-- 使用keep-alive -->
  <router-view v-slot="props">
    <keep-alive include="bookmark,wiki">
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>

  <!-- 滚动到顶部 -->
  <div class="to-up" :style="{display: isOnTop}" @click="toTopClick" >
    <img src="@/static/img/page/up.png" alt="">
  </div>
</div>

</template>
<style lang="less" scoped>

.app {
  user-select: none;
}

.nav {
  display: flex;

  .item {
    padding: 5px 10px;
    cursor: pointer;

    &.active {
      color: #f43f5e;
      font-weight: 700;
    }
  }
}

.to-up {
  position: fixed;
  right: 10px;
  bottom: 20px;

  img {
    width: 20px;
    height: 20px;
    border: 2px solid #222;
    border-radius: 50%;
  }
}

</style>