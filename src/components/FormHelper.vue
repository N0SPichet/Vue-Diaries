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

</style>
