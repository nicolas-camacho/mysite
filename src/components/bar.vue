<template>
  <div class="shadow-neu_in rounded-full flex lg:block">
    <div
      class="h-12 w-12 lg:h-16 lg:w-16 rounded-full shadow-neu_nr icon m-4 lg:m-6 text-center flex flex-col justify-center border-0 text-purple-600"
    >
      <i class="fab fa-github fa-2x object-center"></i>
    </div>
    <div
      class="h-12 w-12 lg:h-16 lg:w-16 rounded-full shadow-neu_nr icon m-4 lg:m-6 text-center flex flex-col justify-center border-0 text-purple-600"
    >
      <i class="fab fa-linkedin-in fa-2x object-center"></i>
    </div>
    <div
      class="h-12 w-12 lg:h-16 lg:w-16 rounded-full shadow-neu_nr icon m-4 lg:m-6 text-center flex flex-col justify-center border-0 text-purple-600"
    >
      <i class="far fa-envelope fa-2x object-center"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "bar"
};
</script>

<style scoped>
.icon:active {
  @apply shadow-plain;
}
</style>
