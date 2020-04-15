<template>
  <div>
    <block-slider />
    <block-game />
    <block-newsletter />
    <block-how-to />
    <block-testimonials />
    <block-setup />
    <block-prices />
    <block-video />
    <block-faq />
  </div>
</template>

<script>
import BlockSlider from '@/components/BlockSlider.vue';
import BlockGame from '@/components/BlockGame.vue';
import BlockNewsletter from '@/components/BlockNewsletter.vue';
import BlockHowTo from '@/components/BlockHowTo.vue';
import BlockTestimonials from '@/components/BlockTestimonials.vue';
import BlockSetup from '@/components/BlockSetup.vue';
import BlockPrices from '@/components/BlockPrices.vue';
import BlockVideo from '@/components/BlockVideo.vue';
import BlockFaq from '@/components/BlockFaq.vue';

export default {
  name: 'Home',
  components: {
    BlockSlider,
    BlockGame,
    BlockNewsletter,
    BlockHowTo,
    BlockTestimonials,
    BlockSetup,
    BlockPrices,
    BlockVideo,
    BlockFaq
  }
};
</script>
