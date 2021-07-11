<!-- 模板标签 -->
<template>
  <!--ion-app 包装其他组件的顶级组件 -->
  <ion-app id="app">
    <ion-vue-router />
  </ion-app>
</template>

<style src='@ionic/core/css/core.css'></style>
<style src='@ionic/core/css/ionic.bundle.css'></style>
<style src='./assets/css/viewer.css'></style>
<script>
/** 组件的逻辑 */
export default {
  /* eslint-disable */
  name: "App",
};
</script>
<style>
/* 组件的css样式 */
ion-navbar.toolbar.toolbar-ios.statusbar-padding,
ion-navbar.toolbar-ios ion-title.title-ios,
ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
ion-toolbar.toolbar-ios ion-title.title-ios {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
</style>
