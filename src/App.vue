<template>
	<div id="app">
		<app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
		<create-diary></create-diary>
		<app-diaries v-bind:diaries="diaries"></app-diaries>
		<app-footer v-bind:title="title"></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Diaries from './components/Diaries.vue';
import CreateDiary from './components/CreateDiary';
import FormHelper from './components/FormHelper';

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-diaries': Diaries,
		'create-diary': CreateDiary,
		'form-helper':FormHelper
	},
	data () {
		return {
			diaries: [],
			title: 'My Diary Blogs'
		}
	},
	methods: {
		updateTitle(event) {
			this.title = event;
		}
	},
	created() {
		this.$http.get('http://localhost/Blogs-API/public/api/diaries').then(function(data) {
			this.diaries = data.body.data;
		})
	}
}
</script>

<style scoped>
	h1 {
		color: red;
		text-transform: uppercase;
	}
</style>
