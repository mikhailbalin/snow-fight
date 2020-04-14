<template>
  <div>
    <block-slider />
    <block-game />
    <block-newsletter />
    <block-how-to />
    <block-testimonials />
    <block-setup />
  </div>
</template>

<script>
import BlockSlider from '@/components/BlockSlider.vue';
import BlockGame from '@/components/BlockGame.vue';
import BlockNewsletter from '@/components/BlockNewsletter.vue';
import BlockHowTo from '@/components/BlockHowTo.vue';
import BlockTestimonials from '@/components/BlockTestimonials.vue';
import BlockSetup from '@/components/BlockSetup.vue';

export default {
  name: 'Home',
  components: {
    BlockSlider,
    BlockGame,
    BlockNewsletter,
    BlockHowTo,
    BlockTestimonials,
    BlockSetup
  }
};
</script>
