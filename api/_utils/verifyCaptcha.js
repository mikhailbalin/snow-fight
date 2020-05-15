const axios = require('axios').default;
const { verify } = require('hcaptcha');
const getUrl = require('./getUrl');

const getResponse = (status, data) => ({ status, data });

module.exports = reqData => {
  const { token, ...values } = reqData;

  console.log('reqData', typeof token, values);

  if (token) {
    verify(process.env.CAPTCHA_SECRET, token)
      .then(verification => {
        console.log('verification', verification);
        if (verification.success) {
          axios
            .post(getUrl('snow_fight_email_post'), values)
            .then(res => {
              console.log('axios res', res);
              return getResponse(200, 'axios res');
            })
            .catch(err => {
              console.error('axios err', err);
              return getResponse(500, 'axios error');
            });
        } else {
          return getResponse(500, 'captcha error');
        }
      })
      .catch(err => {
        console.error('verify err', err);
        return getResponse(500, 'verify error');
      });
  } else {
    return getResponse(500, 'No email token provided');
  }
};
