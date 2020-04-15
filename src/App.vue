<template>
  <app-layout />
</template>

<script>
// @ is an alias to /src
import AppLayout from '@/components/AppLayout.vue';

export default {
  name: 'App',
  components: { AppLayout }
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

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
</style>
