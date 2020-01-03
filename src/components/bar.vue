<template>
	<div class="shadow-neu_in rounded-full sm:absolute sm:left-0 ml-6 flex sm:block sm:w-auto">
		<div class="h-16 w-16 rounded-full shadow-neu icon m-6 text-center flex flex-col justify-center">
			<i class="fab fa-github fa-2x object-center"></i>
		</div>
		<div class="h-16 w-16 rounded-full shadow-neu icon m-6 text-center flex flex-col justify-center">
			<i class="fab fa-linkedin-in fa-2x object-center"></i>
		</div>
		<div class="h-16 w-16 rounded-full shadow-neu icon m-6 text-center flex flex-col justify-center">
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
	box-shadow: 0 0 0 0;
}
</style>