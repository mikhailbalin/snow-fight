<template>
  <ul class="list mb-3">
    <li class="list-item mb-1" v-for="(item, idx) in items" :key="idx">
      <font-awesome-icon
        class="list-icon primary--text text--lighten-1"
        :icon="['fas', 'plus']"
      />
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppList',

  props: {
    items: Array
  }
};
</script>

<style lang="scss" scoped>
.list {
  list-style: none;

  &-item {
    position: relative;
  }

  &-icon {
    position: absolute;
    top: calc(24px / 2);
    left: calc(-24px / 2);
    transform: translate(-50%, -50%);
    font-size: 0.75em;
  }
}
</style>
