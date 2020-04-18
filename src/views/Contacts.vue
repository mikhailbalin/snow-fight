<template>
  <div class="fill-height">
    <app-banner title="Контакты" />

    <v-sheet tile color="grey lighten-5 fill-height grey--text text--darken-1">
      <v-container class="px-8 py-12">
        <v-row>
          <v-col cols="12" md="5" lg="3" offset-lg="2" xl="2" offset-xl="3">
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

          <v-col cols="12" md="7" lg="5" xl="4">
            <v-form v-model="formValid" @submit.prevent="sendForm">
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
                    v-model="name"
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
                    v-model="email"
                    required
                  />
                </v-col>

                <v-col cols="12" class="pt-0 pt-sm-3">
                  <v-textarea
                    outlined
                    name="message"
                    label="Сообщение"
                    v-model="message"
                    :rules="messageRules"
                    placeholder="Я бы хотел..."
                    required
                  ></v-textarea>
                </v-col>

                <v-col cols="12">
                  <app-captcha
                    @onVerify="onCaptchaVerify"
                    @onExpired="onCaptchaExpired"
                  />

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

    <v-snackbar
      v-model="snackbar.visible"
      :timeout="6000"
      :color="snackbar.state === 'success' ? 'green' : 'red'"
    >
      {{ snackbar.text }}
      <v-btn dark text @click="snackbar.visible = false">
        Закрыть
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
import AppBanner from '@/components/AppBanner.vue';
import AppCaptcha from '@/components/AppCaptcha.vue';

export default {
  name: 'Contacts',

  components: { AppBanner, AppCaptcha },

  computed: {
    hasToken() {
      return !!this.captchaToken;
    },
    submitAllowed() {
      return this.formValid && this.hasToken && !this.captchaExpired;
    },
    ...mapState(['tel'])
  },

  data: () => ({
    snackbar: {
      visible: false,
      text: '',
      state: 'success'
    },
    name: '',
    nameRules: [value => !!value || 'Введите вашe имя.'],
    email: '',
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
    message: '',
    messageRules: [value => !!value || 'Введите сообщение.'],
    formValid: false,
    captchaToken: '',
    captchaExpired: false,
    capchaError: ''
  }),

  methods: {
    async sendForm() {
      if (this.submitAllowed) {
        console.log({ token: this.hasToken });
        try {
          const res = await axios.post('/api/post-form', {
            value1: this.name,
            value2: this.email,
            value3: this.message,
            token: this.captchaToken
          });

          if (res.status === 200) {
            this.snackbar.text = 'Сообщение отправлено!';
            this.snackbar.state = 'success';
            this.snackbar.visible = true;
          }
        } catch {
          this.snackbar.text = 'Произошла ошибка!';
          this.snackbar.state = 'error';
          this.snackbar.visible = true;
        }
      } else {
        if (!this.hasToken) {
          console.error('no token');
        }
      }
    },

    onCaptchaVerify(token) {
      this.captchaToken = token;
    },

    onCaptchaExpired(expired) {
      this.captchaExpired = expired;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-address {
  font-style: normal;
}
</style>
