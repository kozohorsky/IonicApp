<template>
  <base-layout page-title="Pridej polozku" page-default-back-link="/list">
    <create-item-form @save-item="saveItem"></create-item-form>
  </base-layout>
</template>

<script>
import CreateItemForm from "../components/CreateItemForm.vue";
import BaseLayout from "@/components/BaseLayout.vue";
export default {
  components: {
    BaseLayout,
    CreateItemForm,
  },
  methods: {
    saveItem(itemData) {
      this.$store.dispatch("addItem", itemData);
      this.$router.replace("/list");
    },
  },
};
</script>
