import { onMounted, onUnmounted, ref } from "vue";
import {throttle} from 'lodash'

function useScroll() {
  const scrollTop = ref(0)

  const handler = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop
  }, 700)

  onMounted(() => {
    window.addEventListener('scroll', handler)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handler)
  })

  return {
    scrollTop
  }
}

export default useScroll