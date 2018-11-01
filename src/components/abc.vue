<template>
  <div>
	<input type="text" v-model="a">
	<p>{{a}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  methods: {

  }
}
</script>
