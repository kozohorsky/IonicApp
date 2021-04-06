<template>
  <base-layout page-title="Nakupni seznam">
    <template v-slot:actions-end>
      <ion-button router-link="/list/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>

    <items-list :list="list"></items-list>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import ItemsList from "../components/ItemsList.vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  components: {
    ItemsList,
    BaseLayout,
    IonIcon,
    IonButton,
  },
  data() {
    return {
      add,
    };
  },
  computed: {
    list() {
      return this.$store.getters.list;
    },
  },
};
</script>
