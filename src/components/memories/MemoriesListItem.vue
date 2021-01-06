<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-avatar slot="start">
      <img :src="memory.img" />
    </ion-avatar>
    <ion-label>{{ memory.title }}</ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonAvatar, IonLabel } from "@ionic/vue";
export default {
  props: ["memory"],
  components: {
    IonItem,
    IonAvatar,
    IonLabel,
  },
};
</script>
