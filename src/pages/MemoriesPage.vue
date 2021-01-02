<template>
  <base-layout pageTitle="Lista de Memórias">
    <ion-list>
      <ion-item
        :router-link="`/memories/${memory.id}`"
        v-for="memory in memories"
        :key="memory.id"
      >
        <ion-avatar slot="start">
          <img :src="memory.img" />
        </ion-avatar>
        <ion-label>{{ memory.title }}</ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonAvatar, IonLabel } from "@ionic/vue";
export default {
  components: {
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>
