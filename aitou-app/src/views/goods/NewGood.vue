<template>
  <div id="new-good" class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>商品追加</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- HTML <figure> 标签:文档中插图的图像 -->
      <el-form :model="foodForm" ref="foodForm" label-width="110px" class="form food_form">
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
            action
            multiple
            :limit="10"
            list-type="picture-card"
            :file-list="fileList"
            :on-success="uploadImg"
            :before-upload="beforeImgUpload"
            :on-change="changeImage"
            :auto-upload="false"
          >
            <div class="el-icon-plus el-upload__text">
              将图片拖到此处，或
              <em>点击上传</em>
            </div>
            <i class="avatar-uploader-icon"></i>
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
      baseUrl,
      baseImgPath,
      fileList: [],
      foodForm: {
        name: "",
        description: "",
        image_path: "",
        activity: "",
        attributes: [],
        specs: [
          {
            specs: "默认",
            packing_fee: 0,
            price: 20,
          },
        ],
      },
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
    uploadImg(res, file) {
      if (res.status == 1) {
        this.foodForm.image_path = res.image_path;
      } else {
        this.$message.error("上传图片失败！");
      }
    },
    changeImage(file, fileList) {
      this.files = fileList;
      console.log("changeImage==" + JSON.stringify(file));
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
  border: 50px #ee0000 #ee0000;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100px;
  width: 100px;
}

.food_form {
  border: 1px solid #eaeefb;
  padding: 10px 10px 0;
}
.avatar {
  width: 120px;
  height: 120px;
  display: inline-flex;
}
</style>
