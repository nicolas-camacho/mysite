<template>
  <div class="container mx-auto m-40 rounded terminal p-6">
    <img class="h-40 w-40 rounded-full mx-auto perfil p-3" src="../assets/img/perfil.jpeg">
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.terminal {
  background-color: #eeeeee;
  box-shadow:
    -6px -9px 18px 0 rgba(255, 255, 255, 1),
    6px 9px 18px 0 rgba(0, 0, 0, 0.3);
}

.perfil {
  box-shadow: 
    -6px -9px 18px 0 rgba(255, 255, 255, 1),
    6px 9px 18px 0 rgba(0, 0, 0, 0.3);
}

.perfil:hover {
  box-shadow:
    inset -4px -4px 9px 0 rgba(255, 255, 255, 1),
    inset 4px 4px 9px 0 rgba(0, 0, 0, 0.3);
}
</style>