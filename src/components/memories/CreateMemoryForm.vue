<template>
  <form class="ion-padding">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Título</ion-label>
        <ion-input type="text" required v-model="form.title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Imagem</ion-label>
        <ion-input type="url" required v-model="form.image"></ion-input>
      </ion-item>
    </ion-list>
    <ion-item>
      <ion-label position="floating">Descrição</ion-label>
      <ion-textarea rows="5" v-model="form.description"></ion-textarea>
    </ion-item>
    <ion-button
      expand="full"
      class="ion-margin-top"
      color="tertiary"
      @click="submitForm"
      >Salvar</ion-button
    >
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data() {
    return {
      form: {
        title: "",
        image: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      const data = { ...this.form };
      this.$emit("save-memory", data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>