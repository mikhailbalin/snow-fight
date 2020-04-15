<template>
  <div>
    <font-awesome-icon :icon="icon" />
  </div>
</template>

<script>
export default {
  name: 'AwesomeIcon',
  props: {
    icon: Array
  }
};
</script>
