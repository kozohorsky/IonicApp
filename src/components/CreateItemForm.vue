<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating"> Nazev </ion-label>
        <ion-input type="text" required v-model="enteredNazev"> </ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> url </ion-label>
        <ion-input type="url" required v-model="enteredImage"> </ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Popisek </ion-label>
        <ion-textarea rows="5" required v-model="enteredPopis"> </ion-textarea>
      </ion-item>
      <ion-button type="submit" expand="full">Save</ion-button>
    </ion-list>
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
  emits: ["save-item"],
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
      enteredNazev: "",
      enteredImage: "",
      enteredPopis: "",
    };
  },
  methods: {
    submitForm() {
      const itemData = {
        nazev: this.enteredNazev,
        image: this.enteredImage,
        popis: this.enteredPopis,
      };
      this.$emit("save-item", itemData);
    },
  },
};
</script>
