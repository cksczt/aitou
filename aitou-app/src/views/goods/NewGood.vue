
<template>
  <div v-viewer="options" class="images">
    <template v-for="(image,index) in images">
      <img :src="image.thumbnail" class="image" :key="index" :data-src="image.source" />
    </template>
  </div>
</template>
<script>
/* eslint-disable */
const sourceImages = [];
const base = parseInt(Math.random() * 60, 10) + 10;
for (let i = 0; i < 10; i++) {
  sourceImages.push({
    thumbnail: `https://picsum.photos/id/${base + i}/300/200`,
    source: `https://picsum.photos/id/${base + i}/600/400`,
  });
}

export default {
  methods: {
    toggle() {},
  },
  data() {
    return {
      options: {
        url: "data-src",
      },
      images: sourceImages,
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
