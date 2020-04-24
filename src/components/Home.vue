<template>
	<div>
		<h1 class="text-5xl py-4 text-white">Welcome to <strong>ExceedBravo</strong></h1>
		<p class="text-white lead pb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit. </p>

		<button class="py-2 px-4 bg-white rounded border border-blue-500 hover:border-white hover:text-white hover:bg-blue-500">Get Started</button>
	</div>
</template>



<script>
	export default {
		name: 'Home',
		mounted(){
			// alert('Component mounted.');
			console.log('Component mounted.')
		}
	}

</script>