<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> {{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
} from "@ionic/vue";
export default {
  props: ["pageTitle"],
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
  },
};
</script>

<style></style>
