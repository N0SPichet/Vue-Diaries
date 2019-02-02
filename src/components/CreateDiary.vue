<template>
	<div id="create-diary">
		<form-helper v-if="!submitted">
			<div slot="form-header">
				<h1>Add a New Diary</h1>
			</div>
			<div slot="form-fields">
				<label>Title</label>
				<input type="text" v-model.lazy="diary.title" placeholder="Enter title" class="form-control">
				<label>Content</label>
				<textarea type="text" v-model.lazy="diary.body" placeholder="Enter Information.." rows="3" class="form-control"></textarea>
			</div>
			<div slot="form-checkboxes">
				<h4>Categories</h4>
				<label><input type="checkbox" value="travel" v-model="diary.categories">Travel</label>
				<label><input type="checkbox" value="blog" v-model="diary.categories">Blog</label>
				<label><input type="checkbox" value="work" v-model="diary.categories">Work</label>
			</div>
			<div slot="form-controls">
				<button v-on:click.prevent="post">Submit</button>
			</div>
			<div slot="form-preview">
				<h3>Preview</h3>
				<p><b>Title:</b> {{ diary.title }}</p>
				<p><b>Content:</b> {{ diary.body }}</p>
				<p><b>Categories:</b> <span v-for="cat in diary.categories"> {{ cat }}</span></p>
			</div>
		</form-helper>
		<div v-if="submitted">
			<h3>Diary uploaded</h3>
		</div>
	</div>
</template>

<script>
	import FormHelper from './FormHelper';
	export default {
		components: {
			'form-helper':FormHelper
		},
		data() {
			return {
				diary: {
					title:'',
					body:'',
					categories:[]
				},
				submitted: false
			}
		},
		methods: {
			post() {
				/*post to online fake api*/
				/*this.$http.post('https://jsonplaceholder.typicode.com/posts', {title:this.diary.title, body:this.diary.body, userId:1}).then(function(data) {
					console.log(data);
					this.submitted = true;
				})*/

				/*post to my diaries api*/
				/*this.$http.post('http://laravel-test.com/api/diary', this.diary).then(response => {
					console.log(response);
					this.submitted = true;
				})*/

				/*post to firebase api*/
				this.$http.post('https://vuediaries.firebaseio.com/diaries.json', this.diary).then(response => {
					this.submitted = true;
				}).catch(err => console.log(err))
			}
		}
	}
</script>

<style scoped>
	#create-diary * {
		box-sizing: border-box;
	}
	#create-diary {
		width: 100%;
		max-width: 800px;
		margin: 40px auto;
		padding: 0 20px;
	}
	#form-checkboxes label {
		margin-right: 10px;
	}
</style>
