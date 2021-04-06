<template>
  <ion-item :router-link="`/list/${item.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="item.image" :alt="item.nazev"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ item.nazev }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
export default {
  props: ["item"],
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
};
</script>
