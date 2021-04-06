<template>
  <ion-list>
    <item v-for="item in list" :key="item.id" :item="item"> </item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import Item from "./Item.vue";
export default {
  props: ["list"],
  components: {
    IonList,
    Item,
  },
};
</script>
