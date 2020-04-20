<template>
  <div class="fill-height">
    <app-banner title="Контакты" />

    <v-sheet tile color="grey lighten-5 fill-height grey--text text--darken-1">
      <v-container class="px-8 py-12">
        <v-row>
          <v-col cols="12" md="5" lg="3" offset-lg="1" xl="2" offset-xl="2">
            <address class="app-address mb-6">
              <strong class="mb-2">Снежный бой Юкигассен</strong><br />
              Ленинградская область<br />
              Всеволожский район, дер. Сярьги
            </address>

            <address class="app-address">
              <strong class="mb-2">Позвонить</strong><br />
              <abbr title="Телефон">Т:</abbr>
              <a :href="`tel:${tel}`">{{ ' ' + tel }}</a
              ><br />
              <small class="text--disabled"
                >Ежедневно с 09:00 до 22:30 МСК</small
              >
            </address>
          </v-col>

          <v-col cols="12" class="d-md-none">
            <v-divider class="my-3" />
          </v-col>

          <v-col cols="12" md="7" lg="6" offset-lg="1" xl="5" offset-xl="1">
            <v-form ref="form" v-model="formValid" @submit.prevent="sendForm">
              <v-row>
                <v-col cols="12" sm="6" class="pb-0 pb-sm-3">
                  <v-text-field
                    label="Имя"
                    type="text"
                    placeholder="Петр Иванов"
                    outlined
                    dense
                    height="44"
                    :rules="nameRules"
                    v-model="formData.name"
                    required
                  />
                </v-col>

                <v-col cols="12" sm="6" class="py-0 py-sm-3">
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

                <v-col cols="12" class="pt-0 pt-sm-3">
                  <v-textarea
                    outlined
                    name="message"
                    label="Сообщение"
                    v-model="formData.message"
                    :rules="messageRules"
                    placeholder="Я бы так хотел..."
                    required
                  ></v-textarea>
                </v-col>

                <v-col cols="12">
                  <app-captcha @onVerify="onCaptchaVerify" />

                  <small>
                    Нажимая <strong>Отправить</strong>, вы соглашаетесь с
                    <router-link :to="{ name: 'Privacy' }">
                      политикой конфиденциальности.
                    </router-link>
                  </small>

                  <br />

                  <v-btn
                    class="mt-5"
                    large
                    type="submit"
                    color="primary"
                    title="Отправить"
                    :disabled="!submitAllowed"
                  >
                    Отправить
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import EventService from '@/services/EventService';
import AppBanner from '@/components/AppBanner.vue';
import AppCaptcha from '@/components/AppCaptcha.vue';
import { TEL } from '@/constants';

export default {
  name: 'Contacts',

  components: { AppBanner, AppCaptcha },

  computed: {
    hasToken() {
      return !!this.formData.captchaToken;
    },
    submitAllowed() {
      return this.formValid && this.hasToken;
    }
  },

  data() {
    return {
      nameRules: [value => !!value || 'Введите вашe имя.'],
      emailRules: [
        value => !!value || 'Введите вашу почту.',
        value => value.indexOf('@') !== 0 || 'Email should have a username.',
        value => value.includes('@') || 'Email should include @ symbol.',
        value =>
          value.indexOf('.') - value.indexOf('@') > 1 ||
          'Email shuold contain a valid domain.',
        value =>
          value.indexOf('.') <= value.length - 3 ||
          'Email should contain a valid domain extension.'
      ],
      messageRules: [value => !!value || 'Введите сообщение.'],
      formData: this.createFreshFormObject(),
      formValid: false,
      tel: TEL
    };
  },

  methods: {
    ...mapActions(['showNotification']),

    createFreshFormObject() {
      return {
        name: '',
        email: '',
        message: '',
        captchaToken: ''
      };
    },

    async sendForm() {
      if (this.submitAllowed) {
        try {
          const res = await EventService.postForm({
            value1: this.formData.name,
            value2: this.formData.email,
            value3: this.formData.message,
            token: this.formData.captchaToken
          });

          if (res.status === 200) {
            this.formData = this.createFreshFormObject();
            this.resetValidation();

            this.showNotification({
              msg: 'Сообщение отправлено!',
              type: 'success'
            });
          } else {
            this.showNotification({
              msg: 'Произошла неизвестная ошибка!',
              type: 'error'
            });
          }
        } catch (err) {
          this.showNotification({
            msg: `Произошла ошибка: ${err.message}`,
            type: 'error'
          });
        }
      } else {
        if (!this.hasToken) {
          this.showNotification({
            msg: 'Необходимо пройти проверку для hCaptcha.',
            type: 'error'
          });
        }
      }
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },

    onCaptchaVerify(token) {
      this.formData.captchaToken = token;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-address {
  font-style: normal;
}
</style>
