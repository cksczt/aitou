
<template>
  <div v-viewer class="images">
    <template v-for="image in images">
      <img :src="image" class="image" :key="image" />
    </template>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      images: [
        "https://picsum.photos/200/200",
        "https://picsum.photos/300/200",
        "https://picsum.photos/250/200",
      ],
    };
  },
};
</script> 
<style>
.image {
  height: 200px;
  cursor: pointer;
  margin: 5px;
  display: inline-block;
}
</style>
