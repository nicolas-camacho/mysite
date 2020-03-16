<template>
  <blogCard class="md:p-2 p-8 w-full">
    <div class="w-full flex flex-wrap justify-center">
      <div class="grid grid-cols-3 w-full">
        <div class="flex justify-center items-center">
          <a>
            <img src="../assets/img/Javascript.svg" alt="vueicon" width="64px" height="64px" />
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a>
            <img src="../assets/img/vuejs.svg" alt="vueicon" width="64px" height="64px" />
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a>
            <img src="../assets/img/React.svg" alt="vueicon" width="64px" height="64px" />
          </a>
        </div>
      </div>
      <div class="grid grid-cols-3 w-full mt-4 md:mt-0">
        <div class="flex justify-center items-center">
          <a>
            <img src="../assets/img/css.svg" alt="vueicon" width="64px" height="64px" />
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a>
            <img src="../assets/img/jest.svg" alt="vueicon" width="64px" height="64px" />
          </a>
        </div>
        <div class="flex justify-center items-center">
          <a>
            <img src="../assets/img/node.svg" alt="vueicon" width="64px" height="64px" />
          </a>
        </div>
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
