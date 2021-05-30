<template>
  <the-layout />
</template>

<script>
// @ is an alias to /src
import TheLayout from '@/components/layout/TheLayout.vue';

export default {
  name: 'App',
  components: { TheLayout },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

h1 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  h1 {
    font-size: 2rem;
  }
}

h2 {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
}

p {
  font-size: 1rem;
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
  p {
    font-size: 1.125rem;
  }
}

.app-subtitle {
  color: #bec8ce;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  line-height: 1.2;
  text-transform: uppercase;
}
</style>
