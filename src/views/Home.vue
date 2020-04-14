<template>
  <div>
    <block-slider />
    <block-game />
    <block-newsletter />
  </div>
</template>

<script>
import BlockSlider from '@/components/BlockSlider.vue';
import BlockGame from '@/components/BlockGame.vue';
import BlockNewsletter from '@/components/BlockNewsletter.vue';

export default {
  name: 'Home',
  components: { BlockSlider, BlockGame, BlockNewsletter }
};
</script>
