<template>
	<div class="terminal container mx-auto m-20 rounded-xl shadow-neu bg-main border-neu p-20 sm:flex items-center justify-center sm:relative">
		<bar />
		<img class="h-48 w-48 rounded-full perfil p-3 content-center" src="../assets/img/perfil.jpeg" />
	</div>
</template>

<script>

import bar from './bar'

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
	box-shadow: -6px -6px 26px 0 #ffffff, 6px 6px 26px 0 #a3b1c6;
	transition: all 500ms;
}

.perfil:active {
	box-shadow: inset -6px -6px 26px 0 #ffffff, inset 6px 6px 26px 0 #a3b1c6;
}
</style>