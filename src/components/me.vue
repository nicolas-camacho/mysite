<template>
  <div
    class="terminal m-md lg:h-total rounded-xl shadow-neu bg-main border-neu py-3 lg:p-8 md:px-5 lg:flex"
  >
    <div class="w-5/5 lg:w-1/5 lg:h-half flex justify-center lg:justify-start lg:m-sm">
      <bar />
    </div>
    <div class="w-5/5 flex flex-wrap lg:w-4/5 mt-10 lg:m-sm">
      <div class="w-full flex justify-center items-end">
        <img
          class="h-48 w-48 rounded-full perfil transition hover:transition-fast hover:shadow-neu p-3"
          src="../assets/img/perfil.jpeg"
        />
      </div>
      <div class="w-full text-center">
        <h2 class="text-xl font-firacode font-semibold">Nicolas Camacho</h2>
        <p class="font-firacode text-gray-500">Web Developer</p>
        <p class="font-firacode text-gray-600">Software Engenieering Student</p>
        <div class="px-6 py-4">
          <span
            class="interna-front inline-block bg-gray-200 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 m-1 lg:mr-8 font-firacode"
          >frontend</span>
          <span
            class="interna-vue inline-block bg-green-500 rounded-full px-3 py-1 text-sm text-gray-900 font-semibold m-1 lg:mr-8 font-firacode"
          >vue</span>
          <span
            class="interna-tail inline-block bg-teal-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 font-firacode m-1"
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

<style>
.terminal {
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.perfil:active {
  @apply shadow-neu_in;
}

.interna-front {
  box-shadow: inset 2px 2px 2px 0 #cdd0d3;
}

.interna-vue {
  box-shadow: inset 2px 2px 2px 0 #358a58;
}

.interna-tail {
  box-shadow: inset 2px 2px 2px 0 #38968c;
}
</style>
