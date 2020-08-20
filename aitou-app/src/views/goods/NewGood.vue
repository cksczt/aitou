<template>
  <div id="new-good" class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>商品追加</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- HTML <figure> 标签:文档中插图的图像 -->
      <figure>
        <!--el-upload:  上传文件-->
        <el-upload class="avatar-uploader" :action="baseUrl + '/v1/addimg/food'">
          <!-- <img v-if="foodForm.image_path" :src="baseImgPath + foodForm.image_path" class="avatar" /> -->
          <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
        </el-upload>
      </figure>
    </ion-content>
  </div>
</template>
<script>
/* eslint-disable */
import { baseUrl, baseImgPath } from "@/config/env";
export default {
  data() {
    return {
      baseUrl,
      baseImgPath,
    };
  },
};
</script>
<style lang="scss">
#home {
  ion-header ion-toolbar {
    color: white;
    --background: var(--ion-color-dark-tint);
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
</style>
