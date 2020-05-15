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
        if (verification.success) {
          axios
            .post(getUrl('snow_fight_email_post'), values)
            .then(response => {
              return getResponse(response.status, response.data);
            })
            .catch(err => {
              console.log('axios err', err);
              // err.message
              return getResponse(err.response.status, 'axios error');
            });
        } else {
          return getResponse(500, 'Email Captcha error');
        }
      })
      .catch(err => {
        console.log('verify err', err);
        // err.message
        return getResponse(err.response.status, 'verify error');
      });
  } else {
    return getResponse(500, 'No email token provided');
  }
};
