<template>
  <div style="display: flex; flex-direction: column; margin-bottom: 18px">
    <img :src="src" :alt="caption" />
    <div style="font-size: 14px; background-color: #f9f9f9; padding: 12px">{{ caption }}</div>
  </div>
</template>
<script>
export default {
  props: ["src", "caption"],
  computed: {
    imagesrc() {
      return this.src;
    },
  },
};
</script>

<style scoped></style>
