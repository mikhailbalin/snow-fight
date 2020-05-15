const axios = require('axios').default;
const { verify } = require('hcaptcha');
const getUrl = require('./getUrl');

const getResponse = (status, data) => ({ status, data });

const validateValues = values => {
  const items = Object.keys(values);
  const amountOk = items.length <= 3;
  const namesOk = items.every(val => val.startsWith('value'));
  return amountOk && namesOk;
};

module.exports = async ({ token, ...values }) => {
  const dataValid = token && validateValues(values);

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
        return getResponse(500, 'Save data error');
      }
    } else {
      return getResponse(504, 'Captcha error');
    }
  } else {
    return getResponse(400, 'Bad request');
  }
};
