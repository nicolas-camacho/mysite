<template>
  <div class="m-md rounded-xl shadow-neu bg-main-gr py-3 md:px-5 lg:flex w-full">
    <div class="w-5/5 lg:w-1/5 lg:h-half flex justify-center lg:justify-start">
      <bar />
    </div>
    <div class="w-5/5 flex flex-wrap lg:w-4/5 mt-10 lg:m-0">
      <div class="w-full flex justify-center items-end">
        <img
          class="h-48 w-48 rounded-full perfil transition hover:transition-fast hover:shadow-neu p-3"
          src="../assets/img/perfil.jpeg"
        />
      </div>
      <div class="w-full text-center">
        <h2 class="text-xl font-firacode text-white font-semibold">Nicolas Camacho</h2>
        <p class="font-firacode text-gray-200">Web Developer</p>
        <p class="font-firacode text-purple-500">Software Engenieering Student</p>
        <div class="px-6 py-4">
          <span
            class="interna inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white m-1 lg:mr-8 font-firacode"
          >frontend</span>
          <span
            class="interna inline-block bg-purple-600 rounded-full px-3 py-1 text-sm text-white font-semibold m-1 lg:mr-8 font-firacode"
          >vue</span>
          <span
            class="interna inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white font-firacode m-1"
          >tailwind</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bar from "./bar";

export default {
  name: "me",
  components: {
    bar
  }
};
</script>

<style scoped>
.perfil:active {
  @apply shadow-neu_in;
}

.interna {
  box-shadow: inset 3px 3px 4px 0 #493279;
}

.interna-vue {
  box-shadow: inset 2px 2px 2px 0 #358a58;
}

.interna-tail {
  box-shadow: inset 2px 2px 2px 0 #38968c;
}
</style>
