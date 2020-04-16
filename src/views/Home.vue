<template>
  <div>
    <block-slider />
    <block-game />
    <block-newsletter v-intersect="showMoreContent" />
    <template v-if="loadNewContent">
      <block-how-to />
      <block-testimonials />
      <block-setup />
      <block-prices />
      <block-video />
      <block-faq />
    </template>
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
  },
  data: () => ({
    loadNewContent: false
  }),
  methods: {
    showMoreContent(entries) {
      // TODO check if Intersection observer works
      this.loadNewContent = entries[0].isIntersecting;
    }
  }
};
</script>
