<template>
  <section class="grey lighten-5 px-6 py-12">
    <v-container>
      <blockquote class="test">
        “Это супер захватывающий спорт, он понравился всем моим друзьям! Это
        действительно нечто новое и увлекательное, то, что подойдет для всей
        семьи и разнообразит зимний досуг.”
        <cite>Мария, посетитель соревнований</cite>
      </blockquote></v-container
    >
  </section>
</template>

<script>
export default {
  name: 'BlockTestimonials'
};
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.test {
  font-weight: map-get($font-weights, 'bold');
}
</style>
