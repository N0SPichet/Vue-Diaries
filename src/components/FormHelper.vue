<template>
	<form>
		<div id="form-header">
			<slot name="form-header"></slot>
		</div>
		<div id="form-fields">
			<slot name="form-fields"></slot>
		</div>
		<div id="form-checkboxes">
			<slot name="form-checkboxes"></slot>
		</div>
		<div id="form-controls">
			<slot name="form-controls"></slot>
		</div>
		<div id="form-preview">
			<slot name="form-preview"></slot>
		</div>
	</form>
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
	#form-header, #form-fields, #form-checkboxes, #form-controls, #form-preview {
		margin: 10px auto;
		padding: 10px 20px;
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
