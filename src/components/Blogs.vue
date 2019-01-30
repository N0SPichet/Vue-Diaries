<template>
	<div id="blogs">
		<ul>
			<li v-for="blog in blogs" v-on:click="blog.show = !blog.show">
				<h3>{{ blog.title }}</h3>
				<h4 v-show="blog.show">
					{{ blog.body }}
				</h4>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			blogs: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
#blogs {
	width: 100%;
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;
}
ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li {
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	margin: 10px;
	border: 1px solid #222;
}
</style>
