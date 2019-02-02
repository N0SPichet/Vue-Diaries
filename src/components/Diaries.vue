<template>
	<div id="diaries">
		<h1>All Diaries</h1>
		<input type="text" v-model="search" placeholder="search diaries.." class="form-control">
		<div v-for="diary in filteredDiaries" class="single-diary">
			<router-link v-bind:to="'/diary/'+diary.id"><h3 v-rainbow>{{ diary.title | to-uppercase }}</h3></router-link>
			<h4>{{ diary.body | snippet }}</h4>
		</div>
	</div>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				diaries:[],
				search:[]
			}
		},
		created() {
			/*fetch from my diaries api*/
			/*this.$http.get('http://mytest.com/api/diaries').then(response => {
				this.diaries = response.body.data;
			}).catch(err => console.log(err))*/

			/*fetch from firebase*/
			this.$http.get('https://vuediaries.firebaseio.com/diaries.json').then(response => {
				return response.json();
			}).then(data => {
				var diariesArray = [];
				for (let key in data) {
					data[key].id = key;
					diariesArray.push(data[key]);
				}
				this.diaries = diariesArray;
			}).catch(err => console.log(err))
		},
		computed: {
			filteredDiaries() {
				return this.diaries.filter((diary) => {
					return diary.title.match(this.search);
				})
			}
		},
		directives: {
			"rainbow": {
				bind(el, binding, vnode) {
					el.style.color = "#"+Math.random().toString().slice(2,8);
				}
			}
		}
	}
</script>

<style scoped>
	#diaries {
		width: 100%;
		max-width: 800px;
		margin: 40px auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.single-diary {
		padding: 30px;
		margin: 10px;
		border: 1px solid #222;
	}
</style>
