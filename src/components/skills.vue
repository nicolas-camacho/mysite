<template>
  <blogCard class="w-full">
    <div class="p-8 flex justify-center md:justify-between w-full flex-wrap items-center">
      <div class="mt-4">
        <a>
          <img src="../assets/img/Javascript.svg" alt="vueicon" width="64px" height="64px" />
        </a>
      </div>
      <div class="mt-4">
        <a>
          <img src="../assets/img/vuejs.svg" alt="vueicon" width="64px" height="64px" />
        </a>
      </div>
      <div class="mt-4">
        <a>
          <img src="../assets/img/React.svg" alt="vueicon" width="64px" height="64px" />
        </a>
      </div>
      <div class="mt-4">
        <a>
          <img src="../assets/img/css.svg" alt="vueicon" width="64px" height="64px" />
        </a>
      </div>
      <div class="mt-4">
        <a>
          <img src="../assets/img/jest.svg" alt="vueicon" width="64px" height="64px" />
        </a>
      </div>
      <div class="mt-4">
        <a>
          <img src="../assets/img/node.svg" alt="vueicon" width="64px" height="64px" />
        </a>
      </div>
    </div>
  </blogCard>
</template>

<script>
import blogCard from "./blog_card";
export default {
  name: "skills",
  components: {
    blogCard
  }
};
</script>

<style>
</style>
