const axios = require('axios').default;
const { verify } = require('hcaptcha');
const getUrl = require('./_utils/getUrl');

const getResponse = (status, data) => ({ status, data });

module.exports = reqData => {
  const { token, ...values } = reqData;

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
              return getResponse(err.response.status, err.message);
            });
        } else {
          return getResponse(500, 'Email Captcha error');
        }
      })
      .catch(err => {
        return getResponse(err.response.status, err.message);
      });
  } else {
    return getResponse(500, 'No email token provided');
  }
};
