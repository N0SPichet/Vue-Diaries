<template>
	<div id="diaries">
		<h1>All Diaries</h1>
		<input type="text" v-model="search" placeholder="search diaries.." class="form-control">
		<div v-for="diary in filteredDiaries" class="single-diary">
			<h3 v-rainbow>{{ diary.title | to-uppercase }}</h3>
			<h4>{{ diary.body | snippet }}</h4>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			diaries: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				search:[]
			}
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
		margin-bottom: 80px;
	}
	.single-diary {
		padding: 30px;
		margin: 10px;
		border: 1px solid #222;
	}
	.form-control {
	    display: block;
	    width: 100%;
	    padding: .375rem .75rem;
	    font-size: 1rem;
	    line-height: 1.5;
	    color: #495057;
	    background-color: #fff;
	    background-clip: padding-box;
	    border: 1px solid #ced4da;
	    border-radius: .25rem;
	    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	}
	.form-control {
		margin: 10px auto;
	}
</style>
