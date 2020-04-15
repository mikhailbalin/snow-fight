<template>
  <div>
    <v-img v-if="imgPath" :src="imgPath" max-height="150" contain />
    <h3>{{ numTitle }}</h3>
    <p>{{ description }}</p>
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

<style scoped></style>
