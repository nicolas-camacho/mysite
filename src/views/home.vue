<template>
  <div class="flex flex-wrap">
    <div class="w-full w-2/2 md:w-1/2 my-1 px-1 flex flex-wrap">
      <me />
      <blogCard class="h-small" />
    </div>
    <div class="w-full w-2/2 md:w-1/2 my-1 px-1 flex flex-wrap">
      <blogCard></blogCard>
    </div>
  </div>
</template>

<script>
import me from "../components/me";
import blogCard from "../components/blog_card";

export default {
  name: "home",
  components: {
    me,
    blogCard
  }
};
</script>

<style scoped>
</style>
