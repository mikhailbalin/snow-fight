<template>
  <div>
    <h1>This is an home page</h1>
    <SiteLayout></SiteLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import SiteLayout from '@/components/SiteLayout.vue';

export default {
  name: 'Home',
  components: {
    SiteLayout
  }
};
</script>
