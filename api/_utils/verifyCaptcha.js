const axios = require('axios').default;
const { verify } = require('hcaptcha');
const getUrl = require('./getUrl');
const validateValues = require('./validateValues');
const getResponse = require('./getResponse');

module.exports = async ({ token, ...values }) => {
  const dataValid = token && validateValues(values);

  try {
    if (dataValid) {
      const { success } = await verify(process.env.CAPTCHA_SECRET, token);

      if (success) {
        const { status, data } = await axios.post(
          getUrl('snow_fight_email_post'),
          values
        );

        if (status === 200) {
          return getResponse(status, data);
        } else {
          return getResponse(500, 'Проблема с сохранением данных');
        }
      } else {
        return getResponse(504, 'Проблема с Captcha');
      }
    } else {
      return getResponse(400, 'Проблема с обработкой данных');
    }
  } catch (error) {
    console.log({ error });
  }
};
