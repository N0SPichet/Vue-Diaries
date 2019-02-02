<template>
	<header>
		<nav>
			<ul>
				<li><router-link to="/" class="btn ">Diaries</router-link></li>
				<li><router-link to="/create" class="btn ">Create Diary</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>

<style scoped>
	nav {
		background: #444;
		padding: 14px 0;
		margin-bottom: 40px;
	}
	ul {
		list-style-type: none;
		text-align: center;
		margin: 0;
	}
	li {
		display: inline;
	}
	.btn {
		color: #fff;
	}
	.router-link-exact-active {
		background: #eee;
		color: #444;
	}
</style>
