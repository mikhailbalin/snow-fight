<template>
  <vue-hcaptcha :sitekey="process.env.VUE_APP_CAPTCHA_SITE_KEY"></vue-hcaptcha>
</template>

<script>
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

export default {
  name: 'AppCaptcha',
  components: { VueHcaptcha }
};
</script>

<style lang="scss" scoped></style>
