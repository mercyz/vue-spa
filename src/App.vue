<template>
  <div id="app" class="main min-h-screen w-full">

	<div class="ex-navbar w-full">
		<div class="container mx-auto flex justify-between">
			<div class="logo py-3">
				<a href="#" class="text-white">ExceedBravo</a>
			</div>
			<div class="navbar__nav">

				<ul class="flex">
					<li class="py-2 px-2">
						<router-link to="/" class="text-white" exact>Home</router-link>
					</li>
					<li class="py-2 px-2">
						<router-link to="/about"  class="text-white">About</router-link>
					</li>
					<li class="py-2 px-2">
						<router-link to="/contact"  class="text-white">Contact</router-link>
					</li>
				</ul>
				
			</div>

		</div>
	</div>

	<div class="container mx-auto ">
		<div class="content flex justify-between items-center py-8">
			<div class="content_details py-5 mx-8 w-1/2	">
				<router-view></router-view>
			</div>
			<div class="content__placeholder"></div>
		</div>
	</div>

  </div>
</template>

<script>
	export default{
		name: 'App',
		data(){
			return{

			}
		}
	}
	
</script>