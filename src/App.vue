<template>
  <div id="app">
    <UserInput v-on:deliverShowValue="changeName"></UserInput>
    <Print v-bind:propsdata = "show"></Print>
  </div>
</template>

<script>
import Input from './components/Input.vue'
import Print from './components/Print.vue'

export default {
  name: 'App',
  components: {
    'UserInput':Input,
    'Print':Print
  },
  data: function() {
    return {
      show: true
    }
  },
  methods: {
		changeName: function() {
			this.show = !this.show;
		}
	}
}
</script>

<style>

</style>
