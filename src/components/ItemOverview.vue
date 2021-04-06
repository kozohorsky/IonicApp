<template>
  <ion-img :src="image" :alt="nazev"> </ion-img>
  <h2 class="ion-text-center">{{ nazev }}</h2>
  <p class="ion-text-center">{{ popis }}</p>
</template>

<script>
import { IonImg } from "@ionic/vue";
export default {
  props: ["nazev", "image", "popis"],
  components: {
    IonImg,
  },
};
</script>
