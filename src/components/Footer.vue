<template>
	<footer>
		<p>©{{ new Date().getFullYear() }} {{ title }}</p>
	</footer>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			}
		},
		data() {
			return {
			}
		}
	}
</script>

<style scoped>
	footer {
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		position: fixed;
		background: #222;
		padding: 6px;
	}
	p {
		color: lightgreen;
		text-align: center;
	}
</style>
