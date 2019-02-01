import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.filter('to-uppercase', function(value) {
	return value.toUpperCase();
})

Vue.filter('snippet', function(value) {
	if (value.length > 100) {
		return value.slice(0,100) + "...";
	}
	else {
		return value;
	}
	
})

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
