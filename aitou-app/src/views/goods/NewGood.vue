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
        <el-upload
          ref="upload"
          :show-file-list="true"
          :before-upload="beforeUpload"
          :on-remove="removeUpload"
          :on-preview="handlePreview"
          :file-list="fileList"
          :auto-upload="true"
          class="avatar-uploader"
          :action="baseUrl + '/v1/addimg/food'"
        >
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
  methods: {
    beforeImgUpload(file) {
      const isRightType =
        file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isRightType) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isRightType && isLt2M;
    },
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
  border: 1px dashed #ee0000;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 80px;
  width: 80px;
}
</style>
