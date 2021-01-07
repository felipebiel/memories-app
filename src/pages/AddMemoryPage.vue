<template>
  <base-layout pageTitle="Nova memória" pageDefaultBackLink="/memories">
    <create-memory-form></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../components/memories/CreateMemoryForm";
export default {
  components: {
    CreateMemoryForm,
  },
};
</script>