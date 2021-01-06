<template>
  <base-layout pageTitle="Lista de Memórias">
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import MemoriesList from "../components/memories/MemoriesList";

export default {
  components: {
    MemoriesList,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>
