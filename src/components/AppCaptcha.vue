<template>
  <vue-hcaptcha
    :sitekey="captchaSiteKey"
    size="normal"
    @verify="onVerify"
    @expired="onExpired"
    @error="onError"
  ></vue-hcaptcha>
</template>

<script>
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';

export default {
  name: 'AppCaptcha',
  components: { VueHcaptcha },
  data: () => ({
    captchaSiteKey: process.env.VUE_APP_CAPTCHA_SITE_KEY
  }),
  methods: {
    onVerify(token) {
      this.$emit('onVerify', token);
    },
    onExpired(expired) {
      this.$emit('onExpired', expired);
    },
    onError(error) {
      this.$emit('onError', error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
