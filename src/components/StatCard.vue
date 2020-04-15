<template>
  <div>
    <v-img v-if="imgPath" :src="imgPath" max-height="150" contain />
    <div class="px-6 pt-4">
      <div class="stat-title">{{ numTitle }}</div>
      <p class="stat-description mb-0">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatCard',
  props: {
    imgPath: String,
    numTitle: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.stat {
  &-title,
  &-description {
    font-weight: 300;
  }

  &-title {
    font-size: 2.75rem;
    line-height: 1.15;
  }
}
</style>
