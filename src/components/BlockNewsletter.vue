<template>
  <section class="grey lighten-5 py-6 px-6 text-sm-center">
    <v-container>
      <h2 class="mb-8">Будте в курсе последних событий!</h2>

      <v-form ref="form" v-model="formValid">
        <v-row>
          <v-col cols="12" sm="6" md="4" offset-md="2" class="pb-0 pb-sm-3">
            <v-text-field
              label="Почта"
              type="email"
              placeholder="example@mail.ru"
              outlined
              dense
              height="44"
              :rules="emailRules"
              v-model="formData.email"
              required
            />
          </v-col>

          <v-col class="text-left pt-0 pt-sm-3" cols="12" sm="6" md="4">
            <app-captcha
              ref="captcha"
              @onVerify="onCaptchaVerify"
              size="invisible"
            />

            <v-btn
              large
              type="submit"
              color="primary"
              block
              :disabled="!formValid"
              @click.prevent="validate"
            >
              Подписаться <span class="d-none d-md-inline">на новости</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>

      <small>
        Этот сайт защищен сервисом hCaptcha и применяются его
        <a href="https://hcaptcha.com/privacy">политика конфиденциальности</a> и
        <a href="https://hcaptcha.com/terms">условия обслуживания</a>.

        <br />

        Мы тоже не спамим!
        <router-link :to="{ name: 'Privacy' }">
          Наша конфиденциальность</router-link
        >.
      </small>
    </v-container>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import EventService from '@/services/EventService';
import AppCaptcha from '@/components/AppCaptcha.vue';
import { emailRule } from '@/mixins/validation';

export default {
  name: 'BlockNewsletter',

  mixins: [emailRule],

  components: { AppCaptcha },

  data() {
    return {
      emailRules: [
        (value) => !!value || 'Введите вашу почту.',
        (value) => value.indexOf('@') !== 0 || 'Email should have a username.',
        (value) => value.includes('@') || 'Email should include @ symbol.',
        (value) =>
          value.indexOf('.') <= value.length - 3 ||
          'Email should contain a valid domain extension.',
      ],
      formValid: false,
      formData: this.createFreshFormObject(),
    };
  },

  methods: {
    ...mapActions(['showNotification']),

    validate() {
      this.$refs.captcha.execute();
    },

    createFreshFormObject() {
      return {
        email: '',
        captchaToken: '',
      };
    },

    async sendForm() {
      if (this.formValid && this.formData.captchaToken) {
        try {
          const { status, data } = await EventService.postEmail({
            value1: this.formData.email,
            token: this.formData.captchaToken,
          });

          if (status === 200) {
            this.formData = this.createFreshFormObject();
            this.resetValidation();

            this.showNotification({
              msg: 'Ваша почта у нас. Ждите новостей :)',
              type: 'success',
            });
          } else {
            this.showNotification({
              msg: data,
              type: 'error',
            });
          }
        } catch (err) {
          this.showNotification({
            msg: `Произошла ошибка ): ${err.response.data}`,
            type: 'error',
          });
        }
      }
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },

    onCaptchaVerify(token) {
      if (token) {
        this.formData.captchaToken = token;
        this.sendForm();
      } else {
        this.showNotification({
          msg: 'Необходимо пройти проверку для hCaptcha',
          type: 'error',
        });
      }
    },
  },
};
</script>
