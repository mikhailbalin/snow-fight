const axios = require('axios').default;
const { verify } = require('hcaptcha');
const getUrl = require('./getUrl');

// const getResponse = (status, data) => ({ status, data });

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
              return { status: 200, data: 'axios res' };
              // getResponse(200, 'axios res');
            })
            .catch(err => {
              console.error('axios err', err);
              return { status: 500, data: 'axios err' };
              // getResponse(500, 'axios error');
            });
        } else {
          return { status: 500, data: 'captcha error' };
          // getResponse(500, 'captcha error');
        }
      })
      .catch(err => {
        console.error('verify err', err);
        return { status: 500, data: 'verify error' };
        // getResponse(500, 'verify error');
      });
  } else {
    return { status: 500, data: 'no token' };
    // return getResponse(500, 'no token provided');
  }
};
