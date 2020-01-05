<template>
	<div
		class="terminal m-md md:m-xl rounded-xl shadow-neu bg-main border-neu py-3 md:p-8 sm:px-5 md:flex"
	>
		<div class="sm:5/5 md:w-1/5 flex justify-center md:justify-start md:m-sm">
			<bar />
		</div>
		<div class="sm:w-5/5 md:w-4/5 mt-10 md:m-sm">
			<div class="container w-5/5 justify-center flex items-center">
				<img
					class="h-48 w-48 rounded-full perfil transition hover:transition-fast hover:shadow-neu p-3 content-center"
					src="../assets/img/perfil.jpeg"
				/>
			</div>
			<div class="w-5/5 container text-center mt-2">
				<h2 class="text-xl font-firacode font-semibold">Nicolas Camacho</h2>
				<p class="font-firacode text-gray-600">Junior Web Developer</p>
			</div>
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

.perfil:active {
	@apply shadow-neu_in;
}
</style>
