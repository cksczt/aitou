<template>
  <div id="home" class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title>Home Subheader</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <figure>
        <img alt="Vue logo" src="../assets/img/logo.png" />
      </figure>
      <div>
        <router-link to="/new-good" tag="ion-button">Add good</router-link>
      </div>

      <div>
        <router-link to="/show-good" tag="ion-button">show good</router-link>
      </div>
    </ion-content>
  </div>
</template>

<style lang="scss">
#home {
  ion-header ion-toolbar {
    color: white;
    --background: var(--ion-color-dark-tint);
  }
}
</style>
