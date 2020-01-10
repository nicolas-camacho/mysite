<template>
  <div class="flex flex-wrap overflow-hidden">
    <div class="w-full md:w-1/2 my-1 px-1">
      <me />
    </div>
  </div>
</template>

<script>
import me from "./me";

export default {
  name: "home",
  components: {
    me
  }
};
</script>

<style scoped>
</style>
