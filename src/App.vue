<template>
	<div>
		<h1>Hello Vue</h1>
		<hr>
	</div>
</template>

<script>
	export default {
		created(){ console.log("Created -> Root Instance ( App )")},
		mounted(){ console.log("Mounted -> Root Instance ( App )"); }
	}
</script>

<style lang="scss">
	body{ 
		background-color: rgb( 20, 20, 20 ); 
		width: 80%;
		margin: auto;
		h1{ color: white; text-align: center; }
	}
</style>