<template>
	<div id="single-diary">
		<h1>{{ diary.title }}</h1>
		<article>{{ diary.body }}</article>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: this.$route.params.id,
				diary: {}
			}
		},
		created() {
			/*fetch from my diaries api*/
			/*this.$http.get('http://mytest.com/api/diary/'+this.id).then(response => {
				this.diary = response.body;
			}).catch(err => console.log(err))*/

			/*fetch from firebase*/
			this.$http.get('https://vuediaries.firebaseio.com/diaries/'+this.id+'.json').then(response => {
				return response.json();
			}).then(data => {
				this.diary = data;
			}).catch(err => console.log(err))
		}
	}
</script>

<style scoped>
	#single-diary {
		width: 100%;
		max-width: 800px;
		margin: 40px auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
</style>
