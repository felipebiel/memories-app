<template>
  <base-layout pageTitle="Os detalhes" pageDefaultBackLink="/memories">
    <h2>Estou nos detalhes</h2>
    {{ loadedMemory }}
    {{ memoryId }}
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
};
</script>
