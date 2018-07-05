<template>
<div id="app">
  <h1>{{ titulo }}</h1>
  <div class="items">
    <div class="item" v-for="foto of fotos">
      <img :src="foto.url" :alt="foto.alt">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Alurapic',
      fotos: []
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos') //Return a Promise
      .then(res => console.log(res.body))
    //.then(tes => res.json()) -> return a Promise
    //.then(fotos => console.log(fotos));
  }
}
</script>

<style>

</style>
