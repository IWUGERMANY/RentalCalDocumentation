<template>
  <div style="display: flex; flex-direction: column; margin-bottom: 18px">
    <img :src="withBase(src)" :alt="caption" />
    <div style="font-size: 14px; background-color: #f9f9f9; padding: 12px">{{ caption }}</div>
  </div>
</template>
<script>
import { withBase } from 'vitepress'
import { ref } from 'vue'


export default {
  props: ["src","caption"],
  setup() {
    return {
      withBase
    }
  }
}



</script>

<style scoped></style>
