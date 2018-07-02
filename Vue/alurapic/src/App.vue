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
      fotos: [
        {
          url: 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg',
          alt: 'Cachorro'
        },
        {
          url: 'https://t1.uc.ltmcdn.com/pt/images/8/7/2/img_como_evitar_a_queda_de_pelo_de_cachorro_6278_600.jpg',
          alt: 'Cachorro'
        }
      ]
    }
  }
}
</script>

<style>

</style>
