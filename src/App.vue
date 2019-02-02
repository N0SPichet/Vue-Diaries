<template>
	<div id="app">
		<app-header></app-header>
		<router-view v-bind:title="title" class="mg-bt"></router-view>
		<!-- <create-diary></create-diary> -->
		<!-- <app-diaries v-bind:diaries="diaries"></app-diaries> -->
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
			title: 'Vue Diaries'
		}
	}
}
</script>

<style>
	a:hover {
		text-decoration: none!important;
	}
	.mg-bt {
		margin-bottom: 80px!important;
	}
</style>
