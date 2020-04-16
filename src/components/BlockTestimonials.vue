<template>
  <section class="grey lighten-5 px-6 py-12 text-center">
    <v-container>
      <v-row>
        <v-col xl="8" offset-xl="2">
          <blockquote class="app-blockquote">
            {{ quote }}
            <cite class="app-cite mt-8">{{ cite }}</cite>
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

.app-blockquote {
  font-size: 1.5rem;
  font-weight: map-get($font-weights, 'regular');
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .app-blockquote {
    font-size: 1.75rem;
    font-weight: map-get($font-weights, 'bold');
  }
}

.app-cite {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: #bec8ce;
  text-transform: uppercase;
  font-style: normal;
}
</style>
