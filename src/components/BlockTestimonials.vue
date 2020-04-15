<template>
  <section class="grey lighten-5 px-6 py-12">
    <v-container>
      <v-row align="center">
        <v-col xl="8" offset-xl="2">
          <blockquote class="blockquote">
            {{ quote }}
            <cite class="cite mt-8">{{ cite }}</cite>
          </blockquote>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'BlockTestimonials',
  data: () => ({
    quote:
      '“Это супер захватывающий спорт, он понравился всем моим друзьям! Это действительно нечто новое и увлекательное, то, что подойдет для всей семьи и разнообразит зимний досуг.”',
    cite: 'Мария, посетитель соревнований'
  })
};
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.blockquote {
  font-weight: map-get($font-weights, 'bold');
}

.cite {
  display: block;
}
</style>
