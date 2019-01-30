<template>
	<div id="app">
		<app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
		<app-blogs v-bind:blogs="blogs"></app-blogs>
		<app-footer v-bind:title="title"></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Blogs from './components/Blogs.vue';

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-blogs': Blogs
	},
	data () {
		return {
			blogs: [
				{
				"id": 3,
				"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
				"body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
				show: false
				},
				{
				"id": 4,
				"title": "eum et est occaecati",
				"body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
				show: false
				},
				{
				"id": 5,
				"title": "nesciunt quas odio",
				"body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
				show: false
				},
				{
				"id": 6,
				"title": "dolorem eum magni eos aperiam quia",
				"body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
				show: false
				},
				{
				"id": 7,
				"title": "magnam facilis autem",
				"body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
				show: false
				},
				{
				"id": 8,
				"title": "dolorem dolore est ipsam",
				"body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
				show: false
				},
				{
				"id": 9,
				"title": "nesciunt iure omnis dolorem tempora et accusantium",
				"body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
				show: false
				}
			],
			title: 'Vue Blogs'
		}
	},
	methods: {
		updateTitle(event) {
			this.title = event;
		}
	}
}
</script>

<style scoped>
	h1 {
		color: red;
		text-transform: uppercase;
	}
</style>
