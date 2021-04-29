<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating"> Nazev </ion-label>
        <ion-input type="text" required v-model="enteredNazev"> </ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="imageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon :icon="camera" slot="start"> </ion-icon>
          Vyfotit
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Popisek </ion-label>
        <ion-textarea rows="5" required v-model="enteredPopis"> </ion-textarea>
      </ion-item>
      <ion-button type="submit" expand="full">Ulozit</ion-button>
    </ion-list>
  </form>
</template>

<script>
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;
import { camera } from "ionicons/icons";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon,
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
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      enteredNazev: "",
      imageUrl: null,
      enteredPopis: "",
      camera,
    };
  },
  methods: {
    submitForm() {
      const itemData = {
        nazev: this.enteredNazev,
        image: this.imageUrl,
        popis: this.enteredPopis,
      };
      this.$emit("save-item", itemData);
    },
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60,
      });
      this.imageUrl = photo.webPath;
    },
  },
};
</script>
