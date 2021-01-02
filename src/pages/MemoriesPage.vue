<template>
  <base-layout pageTitle="Lista de Memórias">
    <ion-list>
      <ion-item>Felipe</ion-item>
      <ion-item>Davi</ion-item>
      <ion-item>José</ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";
export default {
  components: {
    IonList,
    IonItem,
  },
};
</script>
