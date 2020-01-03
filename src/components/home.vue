<template>
  <div
    class="terminal m-md md:m-xl rounded-xl shadow-neu bg-main border-neu py-3 md:p-8 sm:px-5 md:flex"
  >
    <div class="sm:5/5 md:w-1/5 flex justify-center md:justify-start md:m-sm">
      <bar />
    </div>
    <div class="sm:w-5/5 md:w-4/5 justify-center flex items-center mt-10 md:m-sm">
      <img
        class="h-48 w-48 rounded-full perfil hover:shadow-neu p-3 content-center"
        src="../assets/img/perfil.jpeg"
      />
    </div>
  </div>
</template>

<script>
import bar from "./bar";

export default {
  name: "home",
  components: {
    bar
  }
};
</script>

<style scoped>
.terminal {
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.perfil {
  transition: all 1000ms ease-in-out;
}

.perfil:hover {
  transition: all 500ms;
}

.perfil:active {
  @apply shadow-neu_in;
}
</style>
