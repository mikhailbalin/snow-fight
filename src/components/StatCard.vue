<template>
  <div>
    <v-img :src="imgPath"></v-img>
    <h3>{{ numTitle }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatCard',
  props: {
    imgPath: {
      type: String,
      required: true
    },
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
