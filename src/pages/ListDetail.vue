<template>
  <base-layout
    :pageTitle="loadedItem ? loadedItem.nazev : 'Loading..'"
    page-default-back-link="/list"
  >
    <h2 v-if="!loadedItem">Polozka nenalezena</h2>
    <item-overview
      v-else
      :nazev="loadedItem.nazev"
      :popis="loadedItem.popis"
      :image="loadedItem.image"
    >
    </item-overview>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import ItemOverview from "../components/ItemOverview.vue";
export default {
  components: {
    ItemOverview,
    BaseLayout,
  },
  data() {
    return {
      itemId: this.$route.params.id,
    };
  },
  computed: {
    loadedItem() {
      return this.$store.getters.item(this.itemId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.itemId = currentRoute.params.id;
    },
  },
};
</script>
