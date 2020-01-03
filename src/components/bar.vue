<template>
  <div class="shadow-neu_in rounded-full flex md:block">
    <div
      class="h-16 w-16 rounded-full shadow-neu icon m-6 text-center flex flex-col justify-center"
    >
      <i class="fab fa-github fa-2x object-center"></i>
    </div>
    <div
      class="h-16 w-16 rounded-full shadow-neu icon m-6 text-center flex flex-col justify-center"
    >
      <i class="fab fa-linkedin-in fa-2x object-center"></i>
    </div>
    <div
      class="h-16 w-16 rounded-full shadow-neu icon m-6 text-center flex flex-col justify-center"
    >
      <i class="far fa-envelope fa-2x object-center"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "bar",
  data() {
    return {
      intern: true
    };
  }
};
</script>

<style scoped>
.icon:active {
  @apply shadow-plain;
}
</style>
