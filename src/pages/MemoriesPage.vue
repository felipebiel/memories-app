<template>
  <base-layout pageTitle="Lista de Memórias">
    <ion-list>
      <ion-item
        router-link="`/memories/${memory.id}`"
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
  data() {
    return {
      memories: [
        {
          img: "https://picsum.photos/500/300?random=1",
          id: 1,
          title: "Felipe Biel",
        },
        {
          img: "https://picsum.photos/500/300?random=2",
          id: 2,
          title: "Davi Biel",
        },
        {
          img: "https://picsum.photos/500/300?random=3",
          id: 3,
          title: "Marlucia de Souza",
        },
      ],
    };
  },
};
</script>
