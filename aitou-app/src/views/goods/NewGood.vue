<template>
  <div id="new-good" class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>商品追加</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- HTML <figure> 标签:文档中插图的图像 -->
      <el-form
        :model="foodForm"
        :rules="foodrules"
        ref="foodForm"
        label-width="110px"
        class="form food_form"
      >
        <figure>
          <!--
          el-upload:  上传文件
          :show-file-list  显示已上传的文件列表
          :before-upload 上传之前触发的事件
          :on-remove 点击移除文件时触发的事件
          :on-preview 点击时触发的事件
          :limit 限制文件数量
          :file-list="fileList" fileList是绑定的数组对象
          :on-exceed = "onExceed" //和limit一起用 当文件数量超出限制时触发
          :onError="uploadError" //上传失败时触发
          :onSuccess="uploadSuccess" //上传成功时触发
          :auto-upload="true"> //是否自动上传
          -->

          <el-upload
            class="avatar-uploader"
            ref="upload"
            :show-file-list="true"
            :before-upload="beforeUpload"
            :on-remove="removeUpload"
            :on-preview="handlePreview"
            :file-list="fileList"
            :auto-upload="true"
            :action="actionUp"
            :http-request="fileRequest"
            :data="pppss"
            multiple
            :limit="10"
            :on-exceed="onExceed"
          >
            <i class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__text">
              将图片拖到此处，或
              <em>点击上传</em>
            </div>
            <!-- <img v-if="foodForm.image_path" :src="baseImgPath + foodForm.image_path" class="avatar" /> -->
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
          </el-upload>
        </figure>
      </el-form>
    </ion-content>
  </div>
</template>
<script>
/* eslint-disable */
import { baseUrl, baseImgPath } from "@/config/env";
export default {
  data() {
    return {
      doUpload: "/api/up/file",
      pppss: {
        srid: "",
      },
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
    handleDelete(index) {
      this.foodForm.specs.splice(index, 1);
    },
    fileRequest(item) {
      let uploadData = new FormData();
      uploadData.append("file", item.file);
      this.$axios.post("http://localhost:8080", uploadData).then((res) => {
        //  成功
        console.log("8888");
      });
    },
  },
};
</script>
<style lang="less">
@import "../../style/mixin";
.form {
  min-width: 400px;
  margin-bottom: 30px;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
    border-radius: 6px;
    transition: all 400ms;
  }
}
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

.food_form {
  border: 1px solid #eaeefb;
  padding: 10px 10px 0;
}
</style>
