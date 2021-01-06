<template>
  <base-layout
    :pageTitle="loadedMemory ? loadedMemory.title : 'Carregando ...'"
    pageDefaultBackLink="/memories"
  >
    <h2 v-if="!loadedMemory">Não encotramos a memória com esse id.</h2>
    <memories-overview
      v-else
      :title="loadedMemory.title"
      :image="loadedMemory.img"
      :description="loadedMemory.description"
    ></memories-overview>
  </base-layout>
</template>

<script>
import MemoriesOverview from "../components/memories/MemoriesOverview";

export default {
  components: {
    MemoriesOverview,
  },
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
