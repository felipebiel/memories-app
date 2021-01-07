<template>
  <base-layout pageTitle="Nova memória" pageDefaultBackLink="/memories">
    <form class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Título</ion-label>
          <ion-input type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Imagem</ion-label>
          <ion-input type="url" required></ion-input>
        </ion-item>
      </ion-list>
      <ion-item>
        <ion-label position="floating">Descrição</ion-label>
        <ion-textarea rows="5"></ion-textarea>
      </ion-item>
      <ion-button expand="full" class="ion-margin-top" color="tertiary"
        >Salvar</ion-button
      >
    </form>
  </base-layout>
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
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
};
</script>